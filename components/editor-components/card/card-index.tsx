import { cn } from "@/lib/utils";
import { CardStyles } from "@/types";

type CardIndexProps = {
  index: number;
  cardStyle: CardStyles;
};

const CardIndex = ({ index, cardStyle }: CardIndexProps) => {
  return (
    <div
      className={cn(
        "absolute -left-12 hidden -bottom-2 items-end justify-center h-full px-4",
        cardStyle === "none" && "hidden",
        cardStyle === "style-1" && "z-0 flex",
        cardStyle === "style-2" && "z-10 flex",
        cardStyle === "style-3" &&
          "z-10 [&>span]:text-8xl -left-16 -bottom-4 flex",
        cardStyle === "style-4" && "flex",
        cardStyle === "style-5" && "z-10 flex"
      )}
    >
      <span
        className={cn(
          "text-red-600 text-6xl font-bold",
          cardStyle === "style-4" || cardStyle === "style-5"
            ? "card-gradient-text"
            : ""
        )}
      >
        {index}
      </span>
    </div>
  );
};

export default CardIndex;
