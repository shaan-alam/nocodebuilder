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

export type Component = CardComponent | RaleComponent;
