import { componentsAtom, selectedNodeAtom } from "@/store";
import { Component } from "@/types";
import { useAtom } from "jotai";
import { useState } from "react";
import RaleProperties from "./properties/rale";
import HeroProperties from "./properties/hero";
import { ScrollArea } from "../ui/scroll-area";

export default function PropertiesSidebar() {
  const [selectedNode, setSelectedNode] = useAtom(selectedNodeAtom);
  const [components, setComponents] = useAtom(componentsAtom);

  const onDeleteComponent = () => {
    const newComponents = components.filter(
      (cmp) => cmp.id !== selectedNode?.id
    );
    setComponents(newComponents);
    setSelectedNode(null);
  };

  const mutateOriginalComponent = (
    key: keyof Component,
    value: string | boolean
  ) => {
    const newComponents = components.map((cmp) => {
      if (cmp.id === selectedNode?.id) {
        return {
          ...cmp,
          [key]: value,
        };
      }
      return cmp;
    });

    setComponents(newComponents);
  };

  return (
    <div className="w-full h-screen bg-background border-l border-border flex flex-col">
      <ScrollArea className="h-[98%]">
        <div className="p-4 border-b border-border">
          <h2 className="text-lg font-semibold text-foreground">Properties</h2>
        </div>
        {selectedNode?.type === "Rale" && (
          <RaleProperties component={selectedNode} />
        )}
        {selectedNode?.type === "Hero" && (
          <HeroProperties component={selectedNode} />
        )}
      </ScrollArea>
    </div>
  );
}
