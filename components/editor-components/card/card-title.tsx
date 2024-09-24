import { cn } from "@/lib/utils";
import { CardComponent } from "@/types";

const CardTitleOnCard = ({
  aspect_ratio,
}: Pick<CardComponent, "aspect_ratio">) => {
  return (
    <div
      className={cn(
        "absolute bottom-0 h-1/2 w-full left-0 right-0 bg-gradient-to-t from-black/90 to-transparent z-10 flex items-center"
      )}
    >
      <div className="relative z-20 font-medium text-[20px] ml-[7px] text-white">
        <p>Title</p>
      </div>
    </div>
  );
};

const CardTitleBelowCard = () => {
  return (
    <div className="absolute -bottom-full left-0 right-0 z-10">
      <div className="relative z-20 font-medium text-[20px] ml-[7px]">
        <p>Title</p>
      </div>
    </div>
  );
};

const CardTitle = ({
  aspect_ratio,
  titleStyle = "Below Card",
  title = false,
}: Pick<CardComponent, "aspect_ratio" | "titleStyle" | "title">) => {
  if (!title) {
    return null;
  }

  return title && titleStyle === "Below Card" ? (
    <CardTitleBelowCard />
  ) : (
    <CardTitleOnCard aspect_ratio={aspect_ratio} />
  );
};

export default CardTitle;
