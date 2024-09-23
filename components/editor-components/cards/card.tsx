import { cardSizes } from "@/lib/card";
import { cn } from "@/lib/utils";
import Image from "next/image";

type CardProps = {
  size: "small" | "medium" | "large";
  index?: number;
  aspectRatio: string;
};

export default function Card({ aspectRatio, size, index }: CardProps) {
  return (
    <div
      style={{
        height: cardSizes[aspectRatio as keyof typeof cardSizes][size].height,
        width: cardSizes[aspectRatio as keyof typeof cardSizes][size].width,
      }}
      className={
        "relative flex items-center p-4 shadow-lg border rounded-[6px] h-[90px] w-[160px]"
      }
    >
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
