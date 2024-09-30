import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { buttonSet, heroLabelsSize, heroLabelsWeight } from "@/data";
import { componentsAtom, selectedNodeAtom } from "@/store";
import {
  HeroComponent,
  IconButtonRadius,
  IconButtonStyle,
  IconButtonVariant,
  IconColor,
  IconRadius,
  IconVariant,
} from "@/types";
import { useAtom } from "jotai";
import set from "lodash/set";
import { Icon } from "lucide-react";

const HeroProperties = ({ component }: { component: HeroComponent }) => {
  const [selectedNode, setSelectedNode] = useAtom(selectedNodeAtom);
  const [components, setComponents] = useAtom(componentsAtom);

  const onDeleteComponent = () => {
    const newComponents = components.filter(
      (cmp) => cmp.id !== selectedNode?.id
    );
    setComponents(newComponents);
    setSelectedNode(null);
  };

  const mutateOriginalComponent = (
    keyPath: string,
    value: string | boolean | number
  ) => {
    setComponents((prevState) => {
      const newComponents = prevState.map((cmp) => {
        if (cmp.id === selectedNode?.id) {
          const newComponent = { ...cmp };
          set(newComponent, keyPath, value);

          setSelectedNode(newComponent);
          return newComponent;
        }
        return cmp;
      });
      return newComponents;
    });
  };

  return (
    <div className="p-4 space-y-4">
      <div>
        <label className="text-sm font-medium text-foreground flex items-center gap-2 mb-1">
          Hero Variant
        </label>
        <div className="space-y-2">
          <Select
            value={component.variant}
            onValueChange={(value) => mutateOriginalComponent("variant", value)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Style" />
            </SelectTrigger>
            <SelectContent>
              {["Contained", "Stretched"].map((style) => (
                <SelectItem value={style}>
                  <div className="flex items-center space-x-3">{style}</div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div>
        <label className="text-sm font-medium text-foreground flex items-center gap-2 mb-1">
          Text Position
        </label>
        <div className="space-y-2">
          <Select
            value={component.text_position}
            onValueChange={(value) =>
              mutateOriginalComponent("text_position", value)
            }
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Style" />
            </SelectTrigger>
            <SelectContent>
              {["Left", "Center", "Right"].map((position) => (
                <SelectItem value={position}>
                  <div className="flex items-center space-x-3">{position}</div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div>
        <label className="text-sm font-medium text-foreground flex items-center gap-2 mb-1">
          Label Text
        </label>
        <div className="space-y-2">
          <Textarea
            value={component.label_text}
            onChange={(e) =>
              mutateOriginalComponent("label_text", e.target.value)
            }
          />
        </div>
      </div>
      <div>
        <label className="text-sm font-medium text-foreground flex items-center gap-2 mb-1">
          Label Size
        </label>
        <div className="space-y-2">
          <Select
            value={component.label_variant}
            onValueChange={(value) =>
              mutateOriginalComponent("label_variant", value)
            }
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Style" />
            </SelectTrigger>
            <SelectContent>
              {Object.keys(heroLabelsSize).map((label) => (
                <SelectItem value={label} key={label}>
                  <div className="flex items-center space-x-3">{label}</div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div>
        <label className="text-sm font-medium text-foreground flex items-center gap-2 mb-1">
          Label Weight
        </label>
        <div className="space-y-2">
          <Select
            value={component.label_weight}
            onValueChange={(value) =>
              mutateOriginalComponent("label_weight", value)
            }
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Style" />
            </SelectTrigger>
            <SelectContent>
              {Object.keys(heroLabelsWeight).map((label) => (
                <SelectItem value={label} key={label}>
                  <div className="flex items-center space-x-3">{label}</div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div>
        <label className="text-sm font-medium text-foreground flex items-center gap-2 mb-1">
          Button Set
        </label>
        <div className="space-y-2">
          <Select
            value={component.buttonSet}
            onValueChange={(value) =>
              mutateOriginalComponent("buttonSet", value)
            }
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Style" />
            </SelectTrigger>
            <SelectContent>
              {Object.keys(buttonSet).map((label) => (
                <SelectItem value={label} key={label}>
                  <div className="flex items-center space-x-3">{label}</div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div>
        <label className="text-sm font-medium text-foreground flex items-center gap-2 mb-1">
          Icon Button Style
        </label>
        <div className="space-y-2">
          <Select
            value={component.icon_button?.style}
            onValueChange={(value) =>
              mutateOriginalComponent("icon_button.style", value)
            }
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Style" />
            </SelectTrigger>
            <SelectContent>
              {[IconButtonStyle.Primary, IconButtonStyle.Secondary].map(
                (style) => (
                  <SelectItem value={style} key={style}>
                    <div className="flex items-center space-x-3">{style}</div>
                  </SelectItem>
                )
              )}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div>
        <label className="text-sm font-medium text-foreground flex items-center gap-2 mb-1">
          Icon Button Variant
        </label>
        <div className="space-y-2">
          <Select
            value={component.icon_button?.variant}
            onValueChange={(value) =>
              mutateOriginalComponent("icon_button.variant", value)
            }
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Variant" />
            </SelectTrigger>
            <SelectContent>
              {[
                IconButtonVariant.Filled,
                IconButtonVariant.Outlined,
                IconButtonVariant.IconOnly,
              ].map((style) => (
                <SelectItem value={style} key={style}>
                  <div className="flex items-center space-x-3">{style}</div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div>
        <label className="text-sm font-medium text-foreground flex items-center gap-2 mb-1">
          Icon Button Radius
        </label>
        <div className="space-y-2">
          <Select
            value={component.icon_button?.radius}
            onValueChange={(value) =>
              mutateOriginalComponent("icon_button.radius", value)
            }
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Radius" />
            </SelectTrigger>
            <SelectContent>
              {[
                IconButtonRadius.FullRoundedCorners,
                IconButtonRadius.RoundedCorner,
              ].map((style) => (
                <SelectItem value={style} key={style}>
                  <div className="flex items-center space-x-3">{style}</div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div>
        <label className="text-sm font-medium text-foreground flex items-center gap-2 mb-1">
          Icon Variant
        </label>
        <div className="space-y-2">
          <Select
            value={component.icon?.variant}
            onValueChange={(value) =>
              mutateOriginalComponent("icon.variant", value)
            }
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Variant" />
            </SelectTrigger>
            <SelectContent>
              {[IconVariant["Icon Only"], IconVariant.Outline].map((style) => (
                <SelectItem value={style} key={style}>
                  <div className="flex items-center space-x-3">{style}</div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div>
        <label className="text-sm font-medium text-foreground flex items-center gap-2 mb-1">
          Icon Radius
        </label>
        <div className="space-y-2">
          <Select
            value={component.icon?.radius}
            onValueChange={(value) => {
              if (value !== 'No Radius') {
                mutateOriginalComponent("icon.variant", IconVariant.Outline);
              }
              mutateOriginalComponent("icon.radius", value);
            }}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Radius" />
            </SelectTrigger>
            <SelectContent>
              {[
                IconRadius["Full Rounded Corners"],
                IconRadius["No Radius"],
                IconRadius["Rounded Corner"],
                IconRadius["Sharp Corners"],
              ].map((style) => (
                <SelectItem value={style} key={style}>
                  <div className="flex items-center space-x-3">{style}</div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div>
        <label className="text-sm font-medium text-foreground flex items-center gap-2 mb-1">
          Icon Color
        </label>
        <div className="space-y-2">
          <Select
            value={component.icon?.color}
            onValueChange={(value) =>
              mutateOriginalComponent("icon.color", value)
            }
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Color" />
            </SelectTrigger>
            <SelectContent>
              {[IconColor.Light, IconColor.Dark].map((style) => (
                <SelectItem value={style} key={style}>
                  <div className="flex items-center space-x-3">{style}</div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div>
        <label className="text-sm font-medium text-foreground flex items-center gap-2 mb-1">
          Icon Size
        </label>
        <div className="space-y-2">
          <Select
            value={component.icon?.size.toString()}
            onValueChange={(value) =>
              mutateOriginalComponent("icon.size", parseInt(value))
            }
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Size" />
            </SelectTrigger>
            <SelectContent>
              {[16, 20, 24, 32, 40, 48].map((style) => (
                <SelectItem value={style.toString()} key={style}>
                  <div className="flex items-center space-x-3">{style}</div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default HeroProperties;
