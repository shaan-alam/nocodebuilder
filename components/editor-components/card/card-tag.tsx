import { cn } from "@/lib/utils";
import { CardTagPosition } from "@/types";

type CardTagProps = {
  tags: boolean;
  position: CardTagPosition;
};

const CardTag = ({ tags, position }: CardTagProps) => {
  const positions: Record<CardTagProps["position"], string> = {
    "top-left": "self-start justify-self-start rounded-br-[8px]",
    "top-center": "self-start mx-auto rounded-bl-[8px] rounded-br-[8px]",
    "top-right": "self-start ml-auto rounded-bl-[8px]",
    "bottom-left": "self-end justify-self-start rounded-tr-[8px]",
    "bottom-center": "self-end mx-auto rounded-tl-[8px] rounded-tr-[8px]",
    "bottom-right": "self-end ml-auto rounded-tl-[8px]",
  };

  return (
    <div
      className={cn(
        "bg-[#FF0000] relative z-30 px-4 py-1 flex items-center justify-center",
        tags ? "block" : "hidden",
        position ? positions[position] : positions["top-left"]
      )}
    >
      <p className="text-white font-medium">New Release</p>
    </div>
  );
};

export default CardTag;
