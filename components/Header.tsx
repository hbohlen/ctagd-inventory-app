// components/Header.tsx

import {
  Navbar,
  NavbarBrand,
  Textarea,
  Button,
  BreadcrumbItem,
  Link,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";

const Header: React.FC = () => {
  return (
    <Navbar isBordered>
      <NavbarBrand>
        <p className="font-bold text-inherit">CTAGD Inventory</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#"></Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page"></Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#"></Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
