import React from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';

const navLinks = [
  { href: '/', label: 'Home', color: 'var(--primary-color)' },
  { href: '/beverages', label: 'Beverages', color: 'var(--info-color' }
];

export function SideNav() {
  return (
    <NavigationMenu.Root className="h-full w-48 bg-black text-white p-4 fixed top-16">
      <ul className="menu-hover-fill flex flex-col items-start leading-none text-2xl uppercase space-y-4">
        {navLinks.map((link, index) => (
          <li
            key={link.href}
            className="relative group"
            style={
              { '--menu-link-active-color': link.color } as React.CSSProperties
            }
          >
            <span className="absolute top-0 left-[-1rem] w-1 h-full transition-transform duration-600 transform bg-primary-color group-hover:translate-x-full"></span>
            <NavigationMenu.Link
              href={link.href}
              className="relative bg-gradient-to-r from-primary-color to-primary-color bg-no-repeat bg-left text-transparent bg-clip-text transition-all duration-450"
              data-text={link.label}
            >
              <span className="absolute inset-0 text-grey-color">
                {link.label}
              </span>
              {link.label}
            </NavigationMenu.Link>
          </li>
        ))}
      </ul>
    </NavigationMenu.Root>
  );
}
