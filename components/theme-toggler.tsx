import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Switch } from "./ui/switch";

const DarkModeSwitch = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex items-center space-x-2">
      <label htmlFor="dark-mode" className="text-sm font-medium my-4">
        Dark Mode
      </label>
      <Switch
        id="dark-mode-switch"
        checked={theme === "dark"}
        onCheckedChange={() => setTheme(theme === "dark" ? "light" : "dark")}
      />
    </div>
  );
};

export default DarkModeSwitch;
