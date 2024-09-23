import { CardComponent } from "@/types";
import { v4 } from "uuid";

export const cardSizes = {
  "16:9": {
    small: {
      height: "90px",
      width: "160px",
    },
    medium: {
      height: "121.5px",
      width: "216px",
    },
    large: {
      height: "153px",
      width: "272px",
    },
  },
  "2:3": {
    small: {
      width: "104px",
      height: "156px",
    },
    medium: {
      width: "160px",
      height: "240px",
    },
    large: {
      height: "324px",
      width: "216px",
    },
  },
};

export const generateCards = (count: number) => {
  let arr = new Array(count).fill(5);

  return arr.map((_) => {
    let card: CardComponent = {
      id: v4(),
      aspect_ratio: "16:9",
      size: "small",
      type: "Card",
    };

    return card;
  });
};
