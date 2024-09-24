"use client";

import { componentsAtom, selectedNodeAtom } from "@/store";
import { CardComponent, RaleComponent } from "@/types";
import { useAtom } from "jotai";
import Card from "../editor-components/card";
import Rale from "../editor-components/rale";
import PropertiesSidebar from "./properties-sidebar";

const Editor = () => {
  const [components] = useAtom(componentsAtom);
  const [selectedNode] = useAtom(selectedNodeAtom);

  const renderComponent = (component: CardComponent | RaleComponent) => {
    const components = {
      Card: <Card index={1} {...(component as CardComponent)} />,
      Rale: <Rale component={component as RaleComponent} />,
    };

    return components[component.type];
  };

  return (
    <div className="h-screen bg-white w-full flex justify-between">
      <div className="w-[80%] p-12">
        {components.map((component) => renderComponent(component))}
      </div>
      <div className="w-[20%]">{selectedNode && <PropertiesSidebar />}</div>
    </div>
  );
};

export default Editor;
