"use client";
import { cardsData, heroLabelsSize, heroLabelsWeight } from "@/data";
import { cn } from "@/lib/utils";
import { selectedNodeAtom } from "@/store";
import {
  ButtonSet,
  Component,
  HeroComponent,
  HeroLabelVariant,
  HeroLabelWeight,
  IconButtonStyle,
} from "@/types";
import { useAtom } from "jotai";
import Image from "next/image";
import Buttons from "./Buttons";

type HeroProps = {
  component: HeroComponent;
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
              {component?.label_text}
            </p>
          </div>
          <Buttons
            buttonSet={component?.buttonSet as ButtonSet}
            icon_button={component?.icon_button}
            icon={component?.icon}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
