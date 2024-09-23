import { cn } from "@/lib/utils";
import { selectedNodeAtom } from "@/store";
import { Component, RaleComponent } from "@/types";
import { useAtom } from "jotai";
import Card from "./card";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";

type RaleProps = {
  component?: RaleComponent;
};

const Rale = ({ component }: RaleProps) => {
  const [selectedNode, setSelectedNode] = useAtom(selectedNodeAtom);

  return (
    <div
      className={cn(
        "p-2 flex space-x-8 gap-2 border-2 border-transparent hover:border-2 hover:border-blue-600  hover:cursor-pointer",
        selectedNode?.id === component?.id ? "border-2 border-blue-500" : ""
      )}
      onClick={() => setSelectedNode(component as Component)}
    >
      {new Array(component?.count).fill(5).map((cmp, index) => (
        <Card
          key={cmp.id}
          index={index + 1}
          aspectRatio={component?.aspect_ratio as string}
          size={component?.size as "small" | "medium" | "large"}
        />
      ))}
    </div>
  );
};

export default Rale;
