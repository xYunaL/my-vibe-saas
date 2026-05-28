import { NextResponse } from "next/server";
import { fetchPitWallData } from "@/features/pitwall/openf1";
import {
  DRIVER_STANDINGS,
  CONSTRUCTOR_STANDINGS,
  RACE_SCHEDULE,
} from "@/features/pitwall/data";

/**
 * GET /api/pitwall
 * Aggregates OpenF1 standings + schedule, falling back to static data on
 * failure so the Pit Wall tab never breaks. `source` lets the UI label origin.
 *
 * `force-dynamic` keeps this OUT of build-time prerender: otherwise a single
 * failed build-time OpenF1 call (Vercel's shared build IP can hit OpenF1's
 * rate limit) would be cached as `fallback` for the whole revalidate window.
 * The actual OpenF1 responses are still cached at the fetch layer (1h) in
 * openf1.ts, so real upstream calls stay infrequent. On fallback we send
 * `no-store` so the next request retries instead of caching the failure.
 */
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const data = await fetchPitWallData();
    if (data.drivers.length === 0 || data.constructors.length === 0) {
      throw new Error("OpenF1 returned empty standings");
    }
    return NextResponse.json({ ...data, source: "openf1" as const });
  } catch {
    return NextResponse.json(
      {
        drivers: DRIVER_STANDINGS,
        constructors: CONSTRUCTOR_STANDINGS,
        schedule: RACE_SCHEDULE,
        source: "fallback" as const,
      },
      { headers: { "Cache-Control": "no-store" } }
    );
  }
}
