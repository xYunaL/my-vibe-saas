import { TEAMS, getTeam } from "@/lib/teams";
import type { ChatMessage, RoomType } from "./types";

/**
 * Seed + simulator data for the chat demo.
 * The simulator stands in for a realtime backend (out of scope per CLAUDE.md
 * "real-time collaboration" boundary) by appending a mock message every few
 * seconds via setInterval in useChatMessages.
 */

export const SEED_GLOBAL_MESSAGES: ChatMessage[] = [
  {
    id: "seed-g-1",
    roomType: "global",
    nickname: "맥스맘",
    teamColor: "#1e41ff",
    text: "이번 캐나다 그랑프리 진짜 기대됩니다 🏎️",
    timestamp: "2026-05-28T09:25:12+09:00",
  },
  {
    id: "seed-g-2",
    roomType: "global",
    nickname: "샤를루와",
    teamColor: "#dc0000",
    text: "페라리 타이어 전략 좀 똑똑하게 가자 ㅠㅠ",
    timestamp: "2026-05-28T09:25:35+09:00",
  },
  {
    id: "seed-g-3",
    roomType: "global",
    nickname: "오렌지동생",
    teamColor: "#ff8000",
    text: "노리스 시뮬레이터 수치 역대급이래요!",
    timestamp: "2026-05-28T09:26:01+09:00",
  },
];

export const SEED_TEAM_MESSAGES: ChatMessage[] = [
  {
    id: "seed-t-ferrari-1",
    roomType: "team",
    teamId: "ferrari",
    nickname: "티포시지망생",
    teamColor: "#dc0000",
    text: "르클레르 이번엔 폴 가자!! 🔴",
    timestamp: "2026-05-28T09:20:00+09:00",
  },
  {
    id: "seed-t-mclaren-1",
    roomType: "team",
    teamId: "mclaren",
    nickname: "파파야사랑",
    teamColor: "#ff8000",
    text: "노리스 피아스트리 듀오 올해 컨스트럭터 가져온다 🧡",
    timestamp: "2026-05-28T09:21:00+09:00",
  },
  {
    id: "seed-t-redbull-1",
    roomType: "team",
    teamId: "redbull",
    nickname: "불스아이",
    teamColor: "#1e41ff",
    text: "하자르 신인인데 생각보다 잘하네요 🐂",
    timestamp: "2026-05-28T09:22:00+09:00",
  },
];

const SIM_NICKNAMES = [
  "패독지기",
  "그리드워커",
  "DRS열림",
  "피트크루",
  "퀄리파잉",
  "패스트랩",
  "언더컷장인",
  "체커기",
  "포디엄가자",
  "레이스데이",
];

const SIM_LINES = [
  "이번 주말 날씨 변수 클 것 같아요 ☔",
  "퀄리파잉 순위 보고 정주행 갑니다",
  "방금 그 오버테이크 미쳤다 ㄷㄷ",
  "피트 스탑 2.1초 실화냐",
  "전략팀 이번엔 제발…",
  "DRS 트레인 또 시작이네 ㅋㅋ",
  "세이프티카 타이밍 운빨 너무 크다",
  "이 서킷은 역시 추월이 안 나와요",
  "프리 프랙티스 페이스 보면 답 나옴",
  "오늘 포디엄 예상 한번 해봅시다",
];

function pick<T>(arr: readonly T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function newId(): string {
  return `sim-${Date.now()}-${Math.floor(Math.random() * 1e6)}`;
}

/**
 * Build a simulated incoming message.
 * - global: random team supplies the color, random nickname.
 * - team:   if forcedTeamId is omitted, a random team is chosen so that
 *           different garages receive traffic.
 */
export function makeSimMessage(
  roomType: RoomType,
  forcedTeamId?: string
): ChatMessage {
  const team =
    roomType === "team" && forcedTeamId
      ? getTeam(forcedTeamId) ?? pick(TEAMS)
      : pick(TEAMS);

  return {
    id: newId(),
    roomType,
    teamId: roomType === "team" ? team.id : undefined,
    nickname: pick(SIM_NICKNAMES),
    teamColor: team.baseColor,
    text: pick(SIM_LINES),
    timestamp: new Date().toISOString(),
  };
}
