import { formatKstTime } from "@/lib/utils";
import { cn } from "@/lib/utils";
import type { ChatMessage } from "./types";

type Props = {
  message: ChatMessage;
  isOwn: boolean;
};

/**
 * Single chat message bubble (FR-004).
 * Own messages: right-aligned, team-color tint. Others: left-aligned, charcoal.
 */
export function ChatBubble({ message, isOwn }: Props) {
  return (
    <div className={cn("flex flex-col", isOwn ? "items-end" : "items-start")}>
      <div className="flex items-center gap-2 px-1">
        <span className="font-mono text-[11px] font-bold" style={{ color: message.teamColor }}>
          {message.nickname}
        </span>
        <span className="font-mono text-[10px] text-white/35">
          {formatKstTime(message.timestamp)}
        </span>
      </div>
      <div
        className={cn(
          "mt-1 max-w-[80%] rounded-2xl px-3.5 py-2 text-sm leading-relaxed",
          isOwn
            ? "rounded-tr-none text-white"
            : "rounded-tl-none bg-[#1c1c24] text-white/90"
        )}
        style={
          isOwn
            ? { backgroundColor: `${message.teamColor}26` /* ~15% alpha */ }
            : undefined
        }
      >
        {message.text}
      </div>
    </div>
  );
}
