"use client";

import { componentsAtom } from "@/store";
import {
  Component,
  ComponentType,
  IconButtonRadius,
  IconButtonState,
  IconButtonStyle,
  IconButtonVariant,
  IconColor,
  IconRadius,
  IconVariant,
} from "@/types";
import {
  IconCards,
  IconDeviceDesktop,
  IconDeviceMobile,
  IconDeviceTablet,
} from "@tabler/icons-react";
import { useAtom } from "jotai";
import { v4 } from "uuid";
import DarkModeSwitch from "../theme-toggler";

export default function Sidebar() {
  const [components, setComponents] = useAtom(componentsAtom);

  const onAddComponent = (type: ComponentType) => {
    let newComponent: Component;

    if (type === "Card") {
      newComponent = {
        id: v4(),
        aspect_ratio: "16:9",
        type: "Rale",
        size: "small",
        count: 5,
      };
    } else {
      newComponent = {
        id: v4(),
        type: "Hero",
        text_position: "Center",
        card_size: "16:9",
        variant: "Stretched",
        label_text: "6 Language · Comedy · Romance",
        label_variant: "H5-14",
        label_weight: "Regular",
        buttonSet: "Button + 1 Icon Button",
        icon_button: {
          style: IconButtonStyle.Primary,
          variant: IconButtonVariant.Filled,
          state: IconButtonState.Default,
          radius: IconButtonRadius.FullRoundedCorners,
        },
        icon: {
          variant: IconVariant["Icon Only"],
          color: IconColor.Light,
          radius: IconRadius["No Radius"],
          size: 24,
        },
      };
    }

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
        <DarkModeSwitch />
        <h2 className="text-lg font-semibold text-foreground mb-4">
          Components
        </h2>
        <div className="space-y-3">
          <button
            className="flex items-center gap-2 p-3 w-full bg-secondary rounded-lg shadow-sm hover:bg-secondary/80 transition-colors"
            onClick={() => onAddComponent("Card")}
          >
            <IconCards className="w-6 h-6 text-foreground" />
            <span className="text-sm font-medium text-foreground">Card</span>
          </button>
          <button
            className="flex items-center gap-2 p-3 w-full bg-secondary rounded-lg shadow-sm hover:bg-secondary/80 transition-colors"
            onClick={() => onAddComponent("Hero")}
          >
            <IconCards className="w-6 h-6 text-foreground" />
            <span className="text-sm font-medium text-foreground">Hero</span>
          </button>
        </div>
      </div>
    </div>
  );
}
