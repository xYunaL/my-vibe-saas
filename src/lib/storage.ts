import type { UserProfile } from "./types";
import { isKnownProfileTeamId } from "./teams";

const KEY = "paddock-korea:user-profile";

export function getUserProfile(): UserProfile | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as UserProfile;
    if (!parsed.nickname || !parsed.selectedTeamId) return null;
    if (!isKnownProfileTeamId(parsed.selectedTeamId)) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function saveUserProfile(profile: UserProfile): void {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(KEY, JSON.stringify(profile));
}

export function clearUserProfile(): void {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(KEY);
}
