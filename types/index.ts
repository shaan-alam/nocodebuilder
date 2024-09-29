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

export type HeroComponent = {
  id: string;
  type: ComponentType;
  variant: HeroVariantType;
  card_size: HeroCardSize;
  text_position: "Left" | "Center" | "Right";
  label_variant: HeroLabelVariant;
  label_weight: HeroLabelWeight;
};

export type Component = CardComponent | RaleComponent | HeroComponent;
