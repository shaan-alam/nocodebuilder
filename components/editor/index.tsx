"use client";

import { componentsAtom, selectedNodeAtom } from "@/store";
import { CardComponent, HeroComponent, RaleComponent } from "@/types";
import { useAtom } from "jotai";
import Card from "../editor-components/card";
import Rale from "../editor-components/rale";
import PropertiesSidebar from "./properties-sidebar";
import Hero from "../editor-components/Hero";
import { ScrollArea } from "@/components/ui/scroll-area";

const Editor = () => {
  const [components] = useAtom(componentsAtom);
  const [selectedNode] = useAtom(selectedNodeAtom);

  const renderComponent = (
    component: CardComponent | RaleComponent | HeroComponent
  ) => {
    const components = {
      Card: <Card index={1} {...(component as CardComponent)} />,
      Rale: <Rale component={component as RaleComponent} />,
      Hero: <Hero component={component as HeroComponent} />,
    };

    return components[component.type];
  };

  return (
    <div className="h-screen bg-background w-full flex justify-between">
      <div className="w-[1366px] p-12 mx-auto">
        <ScrollArea className="h-[98%] bg-black/80">
          <div className="border border-border shadow-sm rounded-md">
            {components.map((component) => renderComponent(component))}
          </div>
        </ScrollArea>
      </div>
      <div className="w-[20%]">{selectedNode && <PropertiesSidebar />}</div>
    </div>
  );
};

export default Editor;
