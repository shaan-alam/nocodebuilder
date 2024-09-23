import { cardSizes } from "@/lib/card";
import Image from "next/image";
import CardTag from "./card-tag";
import { CardComponent, CardTagPosition } from "@/types";

type CardProps = Omit<
  CardComponent & {
    index: number;
  },
  "id"
>;

export default function Card({
  aspect_ratio,
  size,
  index,
  tags,
  tagPosition,
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
      <div className="absolute -left-12 bottom-0 flex items-end justify-center h-full px-4">
        <span className="text-red-600 text-6xl font-bold">{index}</span>
      </div>
      <Image
        src="/placeholder.jpg"
        fill
        alt="Placeholder Image"
        className="object-cover rounded-[6px]"
      />
    </div>
  );
}
