import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { componentsAtom, selectedNodeAtom } from "@/store";
import {
  IconAspectRatio,
  IconRectangle,
  IconRectangleVertical,
  IconResize,
  IconSquare,
  IconTrash,
} from "@tabler/icons-react";
import { useAtom } from "jotai";
import { Button } from "../ui/button";

export default function PropertiesSidebar() {
  const [selectedNode, setSelectedNode] = useAtom(selectedNodeAtom);
  const [components, setComponents] = useAtom(componentsAtom);

  const onDeleteComponent = () => {
    const newComponents = components.filter(
      (cmp) => cmp.id !== selectedNode?.id
    );
    setComponents(newComponents);
    setSelectedNode(null);
  };

  const mutateOriginalComponent = (key: string, value: string) => {
    const newComponents = components.map((cmp) => {
      if (cmp.id === selectedNode?.id) {
        return {
          ...cmp,
          [key]: value,
        };
      }
      return cmp;
    });

    setComponents(newComponents);
  };

  return (
    <div className="w-full h-screen bg-background border-l border-border flex flex-col">
      <div className="p-4 border-b border-border">
        <h2 className="text-lg font-semibold text-foreground">Properties</h2>
      </div>
      <div className="flex-1 p-4 space-y-4">
        <div className="space-y-2">
          <label
            htmlFor="ratio"
            className="text-sm font-medium text-foreground flex items-center gap-2"
          >
            <IconAspectRatio className="w-4 h-4" />
            Ratio
          </label>
          <Select
            value={
              components.find((cmp) => cmp.id === selectedNode?.id)
                ?.aspect_ratio
            }
            onValueChange={(value) =>
              mutateOriginalComponent("aspect_ratio", value)
            }
          >
            <SelectTrigger id="ratio" className="w-full">
              <SelectValue placeholder="Select ratio" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="16:9">
                <div className="flex items-center gap-2">
                  <IconRectangle className="w-4 h-4" />
                  <span>16:9</span>
                </div>
              </SelectItem>
              <SelectItem value="2:3">
                <div className="flex items-center gap-2">
                  <IconRectangleVertical className="w-4 h-4" />
                  <span>2:3</span>
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <label
            htmlFor="size"
            className="text-sm font-medium text-foreground flex items-center gap-2"
          >
            <IconResize className="w-4 h-4" />
            Size
          </label>
          <Select
            value={components.find((cmp) => cmp.id === selectedNode?.id)?.size}
            onValueChange={(value) => mutateOriginalComponent("size", value)}
          >
            <SelectTrigger id="size" className="w-full">
              <SelectValue placeholder="Select size" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="small">
                <div className="flex items-center gap-2">
                  <IconSquare className="w-4 h-4" />
                  <span>Small</span>
                </div>
              </SelectItem>
              <SelectItem value="medium">
                <div className="flex items-center gap-2">
                  <IconRectangle className="w-4 h-4" />
                  <span>Medium</span>
                </div>
              </SelectItem>
              <SelectItem value="large">
                <div className="flex items-center gap-2">
                  <IconRectangle className="w-4 h-4" />
                  <span>Large</span>
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Button variant="destructive" onClick={onDeleteComponent}>
            <IconTrash className="w-4 h-4" />
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
}
