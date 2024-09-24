import { cardsData } from "@/data";
import { cardSizes } from "@/lib/card";
import { CardComponent, CardStyles, CardTagPosition } from "@/types";
import Image from "next/image";
import CardIndex from "./card-index";
import CardTag from "./card-tag";
import CardTitle from "./card-title";

type CardProps = Omit<
  CardComponent & {
    index: number;
  },
  "id"
> & {
  data?: (typeof cardsData)[0];
};

export default function Card({
  aspect_ratio,
  size,
  index,
  tags,
  tagPosition,
  titleEnabled,
  titleStyle,
  data,
  title,
  cardStyle,
}: CardProps) {
  return (
    <div
      style={{
        height: cardSizes[aspect_ratio as keyof typeof cardSizes][size].height,
        width: cardSizes[aspect_ratio as keyof typeof cardSizes][size].width,
      }}
      className={
        "relative flex shadow-lg border rounded-[6px] h-[90px] w-[160px]"
      }
    >
      <CardTag
        tags={tags as boolean}
        position={tagPosition as CardTagPosition}
      />
      <CardIndex index={index} cardStyle={cardStyle as CardStyles} />
      {data && (
        <Image
          src={data[aspect_ratio]}
          fill
          alt="Placeholder Image"
          className="object-cover rounded-[6px]"
        />
      )}
      <CardTitle
        title={title as string}
        titleEnabled={titleEnabled}
        titleStyle={titleStyle}
        aspect_ratio={aspect_ratio}
      />
    </div>
  );
}
