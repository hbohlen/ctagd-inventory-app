import React from "react";
import { NavMenu } from "@/components/NavMenu";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex">
      
      <main>{children}</main>
    </div>                  
  );
};

export default Layout;
