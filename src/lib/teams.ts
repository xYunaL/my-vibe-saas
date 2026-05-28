import type { SpecialTeamId, Team, UserProfile } from "./types";

/**
 * 2026 F1 grid — 11 constructors.
 * Source: openspec/changes/expand-team-roster-and-cross-team-chat/specs/teams/spec.md
 */
export const TEAMS: Team[] = [
  {
    id: "mclaren",
    name: "McLaren",
    fullName: "McLaren Formula 1 Team",
    baseColor: "#ff8000",
    logo: "🧡",
    drivers: ["랜도 노리스 (Lando Norris)", "오스카 피아스트리 (Oscar Piastri)"],
  },
  {
    id: "mercedes",
    name: "Mercedes",
    fullName: "Mercedes-AMG Petronas F1 Team",
    baseColor: "#27f4d2",
    logo: "⭐",
    drivers: [
      "조지 러셀 (George Russell)",
      "안드레아 키미 안토넬리 (Andrea Kimi Antonelli)",
    ],
  },
  {
    id: "redbull",
    name: "Red Bull",
    fullName: "Oracle Red Bull Racing",
    baseColor: "#1e41ff",
    logo: "🐂",
    drivers: [
      "막스 베르스타펜 (Max Verstappen)",
      "아이작 하자르 (Isack Hadjar)",
    ],
  },
  {
    id: "ferrari",
    name: "Ferrari",
    fullName: "Scuderia Ferrari HP",
    baseColor: "#dc0000",
    logo: "🐎",
    drivers: [
      "샤를 르클레르 (Charles Leclerc)",
      "루이스 해밀턴 (Lewis Hamilton)",
    ],
  },
  {
    id: "williams",
    name: "Williams",
    fullName: "Williams Racing",
    baseColor: "#005aff",
    logo: "🔵",
    drivers: ["알렉스 알본 (Alex Albon)", "카를로스 사인츠 (Carlos Sainz)"],
  },
  {
    id: "racingbulls",
    name: "Racing Bulls",
    fullName: "Visa Cash App Racing Bulls F1 Team",
    baseColor: "#6692ff",
    logo: "🐃",
    drivers: ["리암 로슨 (Liam Lawson)", "아비드 린드블라드 (Arvid Lindblad)"],
  },
  {
    id: "astonmartin",
    name: "Aston Martin",
    fullName: "Aston Martin Aramco F1 Team",
    baseColor: "#006f62",
    logo: "💚",
    drivers: [
      "페르난도 알론소 (Fernando Alonso)",
      "랜스 스트롤 (Lance Stroll)",
    ],
  },
  {
    id: "haas",
    name: "Haas",
    fullName: "MoneyGram Haas F1 Team",
    baseColor: "#b6babd",
    logo: "🛞",
    drivers: ["에스테반 오콘 (Esteban Ocon)", "올리버 베어먼 (Oliver Bearman)"],
  },
  {
    id: "audi",
    name: "Audi",
    fullName: "Audi F1 Team",
    baseColor: "#c8001f",
    logo: "🔻",
    drivers: [
      "니코 휠켄베르크 (Nico Hülkenberg)",
      "가브리에우 보르툴레투 (Gabriel Bortoleto)",
    ],
  },
  {
    id: "alpine",
    name: "Alpine",
    fullName: "BWT Alpine F1 Team",
    baseColor: "#ff87c4",
    logo: "🩷",
    drivers: ["피에르 가슬리 (Pierre Gasly)", "프랑코 콜라핀토 (Franco Colapinto)"],
  },
  {
    id: "cadillac",
    name: "Cadillac",
    fullName: "Cadillac F1 Team",
    baseColor: "#c8102e",
    logo: "🇺🇸",
    drivers: [
      "세르히오 페레스 (Sergio Pérez)",
      "발테리 보타스 (Valtteri Bottas)",
    ],
  },
];

export const TEAM_BY_ID: Record<string, Team> = Object.fromEntries(
  TEAMS.map((t) => [t.id, t])
);

export function getTeam(id: string): Team | undefined {
  return TEAM_BY_ID[id];
}

/**
 * Reserved profile identifiers (see types.ts → SpecialTeamId).
 */
export const SPECIAL_TEAM_IDS = ["none", "all"] as const satisfies readonly SpecialTeamId[];

const SPECIAL_TEAM_ID_SET = new Set<string>(SPECIAL_TEAM_IDS);

/**
 * Display metadata for the two virtual onboarding cards.
 */
export type SpecialTeamCard = {
  id: SpecialTeamId;
  label: string;
  caption: string;
  icon: string;
  /** Inline border color — virtual options bypass team palette tokens. */
  borderColor: string;
};

export const SPECIAL_TEAM_CARDS: readonly SpecialTeamCard[] = [
  {
    id: "none",
    label: "응원 팀 없음",
    caption: "팀은 아직 정하지 않았어요",
    icon: "❔",
    borderColor: "rgba(255, 255, 255, 0.18)",
  },
  {
    id: "all",
    label: "올팬",
    caption: "모든 팀을 좋아해요",
    icon: "🌈",
    borderColor: "#ffb800",
  },
];

export function isRealTeam(id: string): boolean {
  return id in TEAM_BY_ID;
}

export function isSpecialTeamId(id: string): id is SpecialTeamId {
  return SPECIAL_TEAM_ID_SET.has(id);
}

export function isKnownProfileTeamId(id: string): boolean {
  return isRealTeam(id) || isSpecialTeamId(id);
}

/**
 * Compose permission for posting in a given team chat.
 *  - real team profile  → only their own team
 *  - "all"              → every team
 *  - "none"             → none
 */
export function canPostInTeamChat(
  profile: Pick<UserProfile, "selectedTeamId"> | null,
  activeTeamId: string
): boolean {
  if (!profile) return false;
  if (profile.selectedTeamId === "all") return true;
  if (profile.selectedTeamId === "none") return false;
  return profile.selectedTeamId === activeTeamId;
}

/**
 * Default active sub-team when the user lands on The Garage tab for the first time.
 */
export function defaultGarageTeamId(
  profile: Pick<UserProfile, "selectedTeamId"> | null
): string {
  if (profile && isRealTeam(profile.selectedTeamId)) {
    return profile.selectedTeamId;
  }
  return TEAMS[0].id;
}
