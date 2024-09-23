export type ComponentType = "Card" | "Hero";

export type BaseComponent = {
  id: string;
  height: number;
  width: number;
};

export type CardComponent = {
  id: string;
  type: "Card";
  aspect_ratio: string;
  size: "small" | "medium" | "large";
};

export type RaleComponent = BaseComponent & {
  type: "Rale";
  aspect_ratio: string;
  size: "small" | "medium" | "large";
  height: number;
  width: number;
  count: number;
};

export type Component = CardComponent | RaleComponent;
