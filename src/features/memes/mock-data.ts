import type { Meme } from "./types";

/**
 * Seed memes for the Meme Box demo. Images use a public placeholder service so
 * the feed isn't empty on first load. Users add their own via image URL.
 */
export const SEED_MEMES: Meme[] = [
  {
    id: "seed-meme-1",
    imageUrl: "https://picsum.photos/seed/paddock-ferrari/600/400",
    caption: "페라리 피트월: We are checking 🤡",
    authorNickname: "티포시지망생",
    authorTeamId: "ferrari",
    likes: 184,
    createdAt: "2026-05-27T14:20:00+09:00",
  },
  {
    id: "seed-meme-2",
    imageUrl: "https://picsum.photos/seed/paddock-mclaren/600/400",
    caption: "파파야 듀오 또 1-2 피니시 가나요 🧡",
    authorNickname: "파파야사랑",
    authorTeamId: "mclaren",
    likes: 142,
    createdAt: "2026-05-27T12:05:00+09:00",
  },
  {
    id: "seed-meme-3",
    imageUrl: "https://picsum.photos/seed/paddock-redbull/600/400",
    caption: "막스 라디오: 또 그 톤이네 ㅋㅋ",
    authorNickname: "불스아이",
    authorTeamId: "redbull",
    likes: 96,
    createdAt: "2026-05-27T10:30:00+09:00",
  },
];
