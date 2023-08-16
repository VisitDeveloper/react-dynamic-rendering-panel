"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const DarkModeBtn = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div>
      {currentTheme === "dark" ? (
        <div
          className="h-6 w-6 cursor-pointer text-yellow-400"
          onClick={() => {
            setTheme("light");
          }}
        >
          lightss
        </div>
      ) : (
        <div
          className="h-6 w-6 cursor-pointer text-slate-700"
          onClick={() => {
            setTheme("dark");
          }}
        >
          darks
        </div>
      )}
    </div>
  );
};
export default DarkModeBtn;
