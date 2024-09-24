"use client";

import { generateCards } from "@/lib/card";
import { componentsAtom } from "@/store";
import { Component } from "@/types";
import {
  IconCards,
  IconDeviceDesktop,
  IconDeviceMobile,
  IconDeviceTablet,
} from "@tabler/icons-react";
import { useAtom } from "jotai";
import { v4 } from "uuid";

export default function Sidebar() {
  const [components, setComponents] = useAtom(componentsAtom);

  const onAddComponent = () => {
    const newComponent: Component = {
      id: v4(),
      aspect_ratio: "16:9",
      type: "Rale",
      size: "small",
      count: 5,
    };

    setComponents([...components, newComponent]);
  };

  return (
    <div className="w-64 h-screen bg-background border-r border-border flex flex-col">
      <div className="p-4 border-b border-border">
        <h2 className="text-lg font-semibold text-foreground mb-4">
          Canvas Size
        </h2>
        <div className="flex justify-between">
          <button className="flex flex-col items-center p-2 rounded-lg hover:bg-accent transition-colors bg-accent">
            <IconDeviceDesktop className="w-6 h-6 text-foreground" />
            <span className="text-xs mt-1 text-muted-foreground">Web</span>
          </button>
          <button className="flex flex-col items-center p-2 rounded-lg hover:bg-accent transition-colors">
            <IconDeviceTablet className="w-6 h-6 text-foreground" />
            <span className="text-xs mt-1 text-muted-foreground">Tablet</span>
          </button>
          <button className="flex flex-col items-center p-2 rounded-lg hover:bg-accent transition-colors">
            <IconDeviceMobile className="w-6 h-6 text-foreground" />
            <span className="text-xs mt-1 text-muted-foreground">Mobile</span>
          </button>
        </div>
      </div>
      <div className="flex-1 p-4 overflow-y-auto">
        <h2 className="text-lg font-semibold text-foreground mb-4">
          Components
        </h2>
        <div className="space-y-3">
          <button
            className="flex items-center gap-2 p-3 w-full bg-secondary rounded-lg shadow-sm hover:bg-secondary/80 transition-colors"
            onClick={onAddComponent}
          >
            <IconCards className="w-6 h-6 text-foreground" />
            <span className="text-sm font-medium text-foreground">Card</span>
          </button>
          <button className="flex items-center gap-2 p-3 w-full bg-secondary rounded-lg shadow-sm hover:bg-secondary/80 transition-colors">
            <IconCards className="w-6 h-6 text-foreground" />
            <span className="text-sm font-medium text-foreground">Hero</span>
          </button>
        </div>
      </div>
    </div>
  );
}
