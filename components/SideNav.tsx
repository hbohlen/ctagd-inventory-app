import React from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';

export function SideNav() {
  return (
    <NavigationMenu.Root className="h-full w-32 bg-gray-800 text-white p-4 fixed top-16">
      <NavigationMenu.List className="flex flex-col space-y-4">
        <NavigationMenu.Item>
          <NavigationMenu.Link
            href="/"
            className="block p-2 rounded hover:bg-gray-700"
          >
            Home
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Link
            href="/beverages"
            className="block p-2 rounded hover:bg-gray-700"
          >
            Beverages
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        {/* Add more navigation items as needed */}
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
}
