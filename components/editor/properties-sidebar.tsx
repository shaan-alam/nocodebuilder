import { useState } from "react";
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
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  ArrowUpLeft,
  ArrowUp,
  ArrowUpRight,
  ArrowDownLeft,
  ArrowDown,
  ArrowDownRight,
  Eclipse,
} from "lucide-react";
import { Component } from "@/types";
import { cardStyles } from "@/data";

export default function PropertiesSidebar() {
  const [isTagsEnabled, setTagsEnabled] = useState(false);
  const [isTitleEnabled, setTitleEnabled] = useState(false);

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
    key: keyof Component,
    value: string | boolean
  ) => {
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
        <label
          htmlFor="ratio"
          className="text-sm font-medium text-foreground flex items-center gap-2"
        >
          <Eclipse className="w-4 h-4" />
          Card Style
        </label>
        <div className="space-y-2">
          <Select
            value={
              components.find((cmp) => cmp.id === selectedNode?.id)?.cardStyle
            }
            onValueChange={(value) =>
              mutateOriginalComponent("cardStyle", value)
            }
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Style" />
            </SelectTrigger>
            <SelectContent>
              {cardStyles.map((style) => (
                <SelectItem value={style.value}>
                  <div className="flex items-center space-x-3">
                    <style.icon className="h-4 w-4" />
                    <span>{style.label}</span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
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
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Switch
              id="tags-mode"
              checked={isTagsEnabled}
              onCheckedChange={(value) => {
                setTagsEnabled(value);

                const originalComponent = components.find(
                  (cmp) => cmp.id === selectedNode?.id
                );
                if (originalComponent) {
                  originalComponent.tags = value;

                  const newComponents = components.map((cmp) => {
                    if (cmp.id === selectedNode?.id) {
                      return originalComponent;
                    }
                    return cmp;
                  });

                  setComponents(newComponents);
                }
              }}
            />
            <Label htmlFor="tags-mode">Tags</Label>
          </div>
          {isTagsEnabled && (
            <Select
              value={
                components.find((cmp) => cmp.id === selectedNode?.id)
                  ?.tagPosition
              }
              onValueChange={(value) => {
                mutateOriginalComponent("tagPosition", value);
              }}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Tags Position" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="top-left">
                  <div className="flex items-center">
                    <ArrowUpLeft className="mr-2 h-4 w-4" />
                    <span>Top Left</span>
                  </div>
                </SelectItem>
                <SelectItem value="top-center">
                  <div className="flex items-center">
                    <ArrowUp className="mr-2 h-4 w-4" />
                    <span>Top Center</span>
                  </div>
                </SelectItem>
                <SelectItem value="top-right">
                  <div className="flex items-center">
                    <ArrowUpRight className="mr-2 h-4 w-4" />
                    <span>Top Right</span>
                  </div>
                </SelectItem>
                <SelectItem value="bottom-left">
                  <div className="flex items-center">
                    <ArrowDownLeft className="mr-2 h-4 w-4" />
                    <span>Bottom Left</span>
                  </div>
                </SelectItem>
                <SelectItem value="bottom-center">
                  <div className="flex items-center">
                    <ArrowDown className="mr-2 h-4 w-4" />
                    <span>Bottom Center</span>
                  </div>
                </SelectItem>
                <SelectItem value="bottom-right">
                  <div className="flex items-center">
                    <ArrowDownRight className="mr-2 h-4 w-4" />
                    <span>Bottom Right</span>
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          )}
        </div>
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Switch
              id="title"
              checked={isTitleEnabled}
              onCheckedChange={(value) => {
                setTitleEnabled(value);

                mutateOriginalComponent("titleEnabled", value);
              }}
            />
            <Label htmlFor="title">Title</Label>
          </div>
          {isTitleEnabled && (
            <Select
              value={
                components.find((cmp) => cmp.id === selectedNode?.id)
                  ?.titleStyle
              }
              onValueChange={(value) => {
                mutateOriginalComponent("titleStyle", value);
              }}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Title Position" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="On Card">On Card</SelectItem>
                <SelectItem value="Below Card">Below Card</SelectItem>
              </SelectContent>
            </Select>
          )}
          <div>
            <Button variant="destructive" onClick={onDeleteComponent}>
              <IconTrash className="w-4 h-4" />
              Delete
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
