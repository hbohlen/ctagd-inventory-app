import React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";

export function Header() {
  return (
    <NavigationMenu.Root className="w-full bg-gray-800 text-white p-4 z-10">
      <NavigationMenu.List className="flex justify-between items-center">
        <NavigationMenu.Item>
          <div className="text-lg font-bold">My App</div>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <div className="text-sm">Welcome to the App</div>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
}
