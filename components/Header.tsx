import React from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';

export function Header() {
  return (
    <NavigationMenu.Root className="h-20 w-full bg-black rounded-md text-white p-4 z-10 ring-2 ring-purple-500 ring-inset">
      <NavigationMenu.List className="flex justify-center place-items-center">
        <NavigationMenu.Item>
          <div className="text-lg font-serif tracking-wide font-bold">
            CTAGD.inv
          </div>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
}
