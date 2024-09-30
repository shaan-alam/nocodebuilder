import { Icon } from "@tabler/icons-react";

export type ComponentType = "Card" | "Hero";

export type CardTagPosition =
  | "top-left"
  | "top-right"
  | "top-center"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right";

export type CardTitlePosition = "Below Card" | "On Card";

export type CardStyles =
  | "none"
  | "style-1"
  | "style-2"
  | "style-3"
  | "style-4"
  | "style-5";

export type CardComponent = {
  id: string;
  type: "Card";
  aspect_ratio: "16:9" | "2:3";
  size: "small" | "medium" | "large";
  tags?: boolean;
  tagPosition?: CardTagPosition;
  title?: string;
  titleEnabled?: boolean;
  titleStyle?: "Below Card" | "On Card";
  cardStyle?: CardStyles;
};

export type RaleComponent = {
  id: string;
  type: "Rale";
  aspect_ratio: string;
  size: "small" | "medium" | "large";
  count: number;
  tags?: boolean;
  tagPosition?: CardTagPosition;
  titleEnabled?: boolean;
  titleStyle?: "Below Card" | "On Card";
  cardStyle?: CardStyles;
};

export type HeroVariantType = "Contained" | "Stretched";
export type HeroCardSize = "2:3" | "1:1" | "4:3" | "16:9";
export type HeroLabelVariant =
  | "H1-24"
  | "H2-20"
  | "H3-18"
  | "H4-16"
  | "H5-14"
  | "H6-12";
export type HeroLabelWeight = "Regular" | "Medium" | "SemiBold" | "Bold";
export type ButtonSet =
  | "Single Button"
  | "2 Buttons"
  | "Button + 1 Icon Button"
  | "Button + 2 Icon Buttons";

export enum IconButtonStyle {
  Primary = "Primary",
  Secondary = "Secondary",
}

export enum IconButtonVariant {
  Filled = "Filled",
  Outlined = "Outlined",
  IconOnly = "Icon Only",
}

export enum IconButtonState {
  Default = "Default",
  Disabled = "Disabled",
  Hover = "Hover",
  Pressed = "Pressed",
  Focus = "Focus",
}

export enum IconButtonRadius {
  FullRoundedCorners = "Full Rounded Corners",
  RoundedCorner = "Rounded Corner",
}

export enum IconVariant {
  "Icon Only" = "Icon Only",
  "Outline" = "Outline",
}

export enum IconRadius {
  "No Radius" = "No Radius",
  "Sharp Corners" = "Sharp Corners",
  "Full Rounded Corners" = "Full Rounded Corners",
  "Rounded Corner" = "Rounded Corner",
}

export enum IconColor {
  "Light" = "Light",
  "Dark" = "Dark",
}

export type HeroComponent = {
  id: string;
  type: ComponentType;
  variant: HeroVariantType;
  card_size: HeroCardSize;
  text_position: "Left" | "Center" | "Right";
  label_text: string;
  label_variant: HeroLabelVariant;
  label_weight: HeroLabelWeight;
  buttonSet: ButtonSet;
  icon_button: {
    style: IconButtonStyle;
    variant: IconButtonVariant;
    state: IconButtonState;
    radius: IconButtonRadius;
  };
  icon: {
    variant: IconVariant;
    radius: IconRadius;
    color: IconColor;
    size: 16 | 20 | 24 | 32 | 40 | 48;
  };
};

export type Component = CardComponent | RaleComponent | HeroComponent;
