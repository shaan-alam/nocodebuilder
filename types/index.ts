export type ComponentType = "Card" | "Hero";

export type CardTagPosition =
  | "top-left"
  | "top-right"
  | "top-center"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right";

export type CardComponent = {
  id: string;
  type: "Card";
  aspect_ratio: string;
  size: "small" | "medium" | "large";
  tags?: boolean;
  tagPosition?: CardTagPosition;
};

export type RaleComponent = {
  id: string;
  type: "Rale";
  aspect_ratio: string;
  size: "small" | "medium" | "large";
  count: number;
  tags?: boolean;
  tagPosition?: CardTagPosition;
};

export type Component = CardComponent | RaleComponent;
