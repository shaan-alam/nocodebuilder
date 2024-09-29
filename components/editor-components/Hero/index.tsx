"use client";
import { Button } from "@/components/ui/button";
import { cardsData, heroLabelsSize, heroLabelsWeight } from "@/data";
import { cn } from "@/lib/utils";
import { selectedNodeAtom } from "@/store";
import {
  Component,
  HeroComponent,
  HeroLabelVariant,
  HeroLabelWeight,
} from "@/types";
import { IconPlayerPlay, IconPlus } from "@tabler/icons-react";
import { useAtom } from "jotai";
import Image from "next/image";

type HeroProps = {
  component?: HeroComponent;
};

const Hero = ({ component }: HeroProps) => {
  const heroData = cardsData[0];
  const [selectedNode, setSelectedNode] = useAtom(selectedNodeAtom);

  const textPositions = {
    Left: "items-start",
    Center: "items-center",
    Right: "items-end",
  };

  return (
    <div className={cn(component?.variant === "Contained" ? "p-4" : "p-0")}>
      <div
        className={cn(
          "bg-[url('https://image.cnbcfm.com/api/v1/image/105828186-1554212544565avengers-endgame-poster-og-social-crop.jpg?v=1555618903&w=1920&h=1080')] bg-cover bg-center h-screen w-full relative border-2 border-transparent hover:border-blue-600 hover:cursor-pointer",
          selectedNode?.id === component?.id ? "border-2 border-blue-600" : "",
          component?.variant === "Contained" ? "rounded-lg" : "rounded-none"
        )}
        onClick={() => setSelectedNode(component as Component)}
      >
        <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-black to-transparent z-10"></div>
        <div
          className={cn(
            "relative z-20 h-full w-full flex flex-col justify-end space-y-4 p-12",
            textPositions[
              component?.text_position as keyof typeof textPositions
            ]
          )}
        >
          <div id="movie-title-image">
            <Image
              height={300}
              width={300}
              src="/Image.png"
              alt="Movie Title"
            />
          </div>
          <div id="movie-title-text" className="text-white text-xl">
            <p
              style={{
                fontSize:
                  heroLabelsSize[component?.label_variant as HeroLabelVariant]
                    .size,
                fontWeight:
                  heroLabelsWeight[component?.label_weight as HeroLabelWeight]
                    .weight,
              }}
            >
              6 Language · Comedy · Romance
            </p>
          </div>
          <div className="flex space-x-3 items-center">
            <Button className="flex space-x-2 bg-[#FF0000] hover:bg-[#FF0000]/90 text-white rounded-md p-8">
              <IconPlayerPlay className="w-6 h-6" />
              <span className="text-base font-medium">Play Now</span>
            </Button>
            <Button className="bg-[#606060] hover:bg-[#606060]/90 p-8">
              <IconPlus className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
