"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  ButtonSet,
  HeroComponent,
  IconButtonStyle,
  IconButtonVariant,
} from "@/types";
import {
  IconInfoCircle,
  IconPlayerPlay,
  IconPlus,
  IconShare,
} from "@tabler/icons-react";

type ButtonsProps = {
  buttonSet: ButtonSet;
  icon_button: HeroComponent["icon_button"];
  icon: HeroComponent["icon"];
};

type ButtonProps = {
  style: IconButtonStyle.Primary | IconButtonStyle.Secondary;
  variant: keyof typeof IconButtonVariant;
};

const generateButtonClasses = ({ style, variant }: ButtonProps): string => {
  const baseClasses = "h-16 w-16";

  const styles = {
    Primary: {
      Filled: "bg-[#FF5E00] hover:bg-[#FF5E00]/90 text-white",
      Outlined:
        "bg-transparent hover:bg-[#FF5E00]/10 border border-[#FF5E00] text-[#FF5E00]",
      "Icon Only": "bg-transparent border-none hover:bg-[#FF5E00]",
    },
    Secondary: {
      Filled: "bg-[#606060] hover:bg-[#606060]/90 text-white",
      Outlined:
        "bg-transparent hover:bg-[#606060]/10 border border-[#606060] text-[#606060]",
      "Icon Only": "bg-transparent border-none hover:bg-[#606060]",
    },
  };

  return `${baseClasses} ${
    styles[style][variant as keyof (typeof styles)["Primary"]]
  }`;
};

const Buttons = ({ buttonSet, icon_button, icon }: ButtonsProps) => {
  const radiusClasses = {
    "Full Rounded Corners": "rounded-full",
    "Rounded Corner": "rounded-md",
    "Sharp Corners": "rounded-none",
  };

  if (buttonSet === "Single Button") {
    return (
      <Button
        className={cn(
          "flex space-x-2  text-white rounded-md p-8 bg-[#FF5E00] hover:bg-[#FF5E00]/90"
        )}
      >
        <IconPlayerPlay className="w-6 h-6" />
        <span className="text-base font-medium">Play Now</span>
      </Button>
    );
  } else if (buttonSet === "Button + 1 Icon Button") {
    return (
      <div className="flex space-x-3 items-center">
        <Button className="flex space-x-2 bg-[#FF5E00] hover:bg-[#FF5E00]/90 text-white rounded-md p-8">
          <IconPlayerPlay className="w-6 h-6" />
          <span className="text-base font-medium">Play Now</span>
        </Button>
        <Button
          className={cn(
            generateButtonClasses({
              style: icon_button?.style,
              variant: icon_button?.variant as keyof typeof IconButtonVariant,
            }),
            icon_button?.radius === "Full Rounded Corners" ? "rounded-full" : ""
          )}
        >
          <IconPlus
            className={cn(
              "w-6 h-6",
              icon?.variant === "Outline" ? "border border-border" : "",
              radiusClasses[icon?.radius as keyof typeof radiusClasses]
            )}
          />
        </Button>
      </div>
    );
  } else if (buttonSet === "Button + 2 Icon Buttons") {
    return (
      <div className="flex space-x-3 items-center">
        <Button className="flex space-x-2 bg-[#FF5E00] hover:bg-[#FF5E00]/90 text-white rounded-md p-8">
          <IconPlayerPlay className="w-6 h-6" />
          <span className="text-base font-medium">Play Now</span>
        </Button>
        Full Rounded Corners
        <Button
          className={generateButtonClasses({
            style: icon_button?.style,
            variant: icon_button?.variant as keyof typeof IconButtonVariant,
          })}
        >
          <IconPlus className="w-6 h-6" />
        </Button>
        <Button
          className={cn(
            generateButtonClasses({
              style: icon_button?.style,
              variant: icon_button?.variant as keyof typeof IconButtonVariant,
            }),
            icon_button?.radius === "Full Rounded Corners" ? "rounded-full" : ""
          )}
        >
          <IconShare
            className={cn(
              "w-6 h-6",
              icon?.variant === "Outline" ? "border border-border" : "",
              radiusClasses[icon?.radius as keyof typeof radiusClasses]
            )}
          />
        </Button>
      </div>
    );
  }

  return (
    <div className="flex space-x-3 items-center">
      <Button className="flex space-x-2 bg-[#FF5E00] hover:bg-[#FF5E00]/90 text-white rounded-md p-8">
        <IconPlayerPlay className="w-6 h-6" />
        <span className="text-base font-medium">Play Now</span>
      </Button>
      <Button
        className={cn(
          generateButtonClasses({
            style: icon_button?.style,
            variant: icon_button?.variant as keyof typeof IconButtonVariant,
          }),
          icon_button?.radius === "Full Rounded Corners" ? "rounded-full" : ""
        )}
      >
        <IconInfoCircle
          className={cn(
            "w-6 h-6 mr-2",
            icon?.variant === "Outline" ? "border border-border" : "",
            icon?.radius === "Full Rounded Corners" && "rounded-full",
            icon?.radius === "Sharp Corners" && "rounded-none",
            icon?.radius === "Rounded Corner" && "rounded-md"
          )}
        />
        <span className="text-base font-medium">More</span>
      </Button>
    </div>
  );
};

export default Buttons;
