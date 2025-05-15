/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import useTheme from "@/lib/hooks/useTheme";
import { IoContrast } from "react-icons/io5";
import { useLayoutEffect } from "react";

const ThemeButton = ({ initTheme }: { initTheme: string }) => {
  const { theme, set } = useTheme(initTheme);
  useLayoutEffect(() => {
    set(initTheme);


    return () => { };
  }, []);
  return (
    <div
      className="w-[45px] h-[45px] flex justify-center items-center rounded-xl transition-colors duration-150 ease-in-out
      bg-transparent"
    >
      <button aria-label="روشن | تاریک" className="hover:text-primary group hover:cursor-pointer">
        <div
          aria-label="روشن | تاریک"
          className="w-full h-full flex items-center justify-center font-extrabold pl-1"
          onClick={() => {
            set(theme === "dark" ? "light" : "dark");
          }}
        >
          <IoContrast
            className={`${theme === "dark" ? "rotate-180" : ""}
              transition-all duration-150 ease-linear`}
            size={28}
          />
        </div>
      </button>

    </div>
  );
};

export default ThemeButton;
