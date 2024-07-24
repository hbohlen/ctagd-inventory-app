import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink
} from '@/components/ui/navigation-menu';
import Link from 'next/link';

export function NavMenu() {
  return (
    <NavigationMenu>
      <div className="w-64 h-screen bg-gray-800 text-white flex flex-col">
        {/* Sidebar Container */}
        <div className="px-5 py-2">
          {/* Logo or Branding */}
          <div className="text-xl font-semibold">Brand</div>
        </div>
        <NavigationMenuList className="flex-1">
          {/* Navigation List */}
          <NavigationMenuItem>
            <Link href="/" passHref>
              <NavigationMenuLink
                asChild
                className="block px-4 py-2 hover:bg-gray-700"
              >
                Home
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/about" passHref>
              <NavigationMenuLink
                asChild
                className="block px-4 py-2 hover:bg-gray-700"
              >
                About
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/contact" passHref>
              <NavigationMenuLink
                asChild
                className="block px-4 py-2 hover:bg-gray-700"
              >
                Contact
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          {/* Add more items as needed */}
        </NavigationMenuList>
      </div>
    </NavigationMenu>
  );
}
