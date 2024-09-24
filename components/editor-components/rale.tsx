"use client";
import { cn } from "@/lib/utils";
import { selectedNodeAtom } from "@/store";
import { Component, RaleComponent } from "@/types";
import { useAtom } from "jotai";
import Card from "./card";
import { cardsData } from "@/data";
import { useMemo } from "react";

type RaleProps = {
  component?: RaleComponent;
};

const Rale = ({ component }: RaleProps) => {
  const raleTitles = ["Horror Movies", "Comedy Movies", "Action Movies"];
  const [selectedNode, setSelectedNode] = useAtom(selectedNodeAtom);

  const generateRandomeNo = useMemo(
    () => Math.floor(Math.random() * raleTitles.length),
    []
  );

  return (
    <div className="my-4">
      <h1 className="font-bold text-xl">
        {raleTitles[Math.floor(generateRandomeNo)]}
      </h1>
      <div
        className={cn(
          "p-2 flex space-x-12 gap-2 border-2 border-transparent hover:border-2 hover:border-blue-600  hover:cursor-pointer",
          selectedNode?.id === component?.id ? "border-2 border-blue-500" : ""
        )}
        onClick={() => setSelectedNode(component as Component)}
      >
        {new Array(5).fill(4).map((cmp, index) => (
          <Card
            key={cmp.id}
            index={index + 1}
            data={cardsData[index]}
            aspect_ratio={component?.aspect_ratio as any}
            size={component?.size as "small" | "medium" | "large"}
            tags={component?.tags}
            tagPosition={component?.tagPosition}
            type="Card"
            title={cardsData[index].title}
            titleEnabled={component?.titleEnabled}
            titleStyle={component?.titleStyle}
            cardStyle={component?.cardStyle}
          />
        ))}
      </div>
    </div>
  );
};

export default Rale;
