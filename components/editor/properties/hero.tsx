import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { heroLabelsSize, heroLabelsWeight } from "@/data";
import { componentsAtom, selectedNodeAtom } from "@/store";
import { HeroComponent } from "@/types";
import { useAtom } from "jotai";

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
    key: keyof HeroComponent,
    value: string | boolean
  ) => {
    const newComponents = components.map((cmp) => {
      if (cmp.id === selectedNode?.id) {
        const newComponent = {
          ...cmp,
          [key]: value,
        };
        setSelectedNode(newComponent);
        return newComponent;
      }
      return cmp;
    });

    setComponents(newComponents);
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
          Label
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
    </div>
  );
};

export default HeroProperties;
