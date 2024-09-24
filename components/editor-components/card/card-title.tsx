import { cn } from "@/lib/utils";
import { CardComponent } from "@/types";

const CardTitleOnCard = ({
  title,
  aspect_ratio,
}: Pick<CardComponent, "aspect_ratio" | "title">) => {
  return (
    <div
      className={cn(
        "absolute bottom-0 h-1/2 w-full left-0 right-0 bg-gradient-to-t from-black/90 to-transparent z-10 flex items-center",
        aspect_ratio === "16:9" ? "h-1/2" : "h-1/4"
      )}
    >
      <div className="relative z-20 font-medium text-[14px] ml-[7px] text-white">
        <p>{title}</p>
      </div>
    </div>
  );
};

const CardTitleBelowCard = ({ title }: { title: string }) => {
  return (
    <div className="absolute top-full left-0 right-0 z-10">
      <div className="relative z-20 font-medium text-[14px] ml-[7px]">
        <p>{title}</p>
      </div>
    </div>
  );
};

const CardTitle = ({
  title,
  aspect_ratio,
  titleStyle = "Below Card",
  titleEnabled = false,
}: Pick<
  CardComponent,
  "aspect_ratio" | "titleStyle" | "titleEnabled" | "title"
>) => {
  if (!titleEnabled) {
    return null;
  }

  return titleEnabled && titleStyle === "Below Card" ? (
    <CardTitleBelowCard title={title as string} />
  ) : (
    <CardTitleOnCard title={title} aspect_ratio={aspect_ratio} />
  );
};

export default CardTitle;
