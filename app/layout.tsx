import React from "react";
import { SideNav } from "@/components/SideNav";
import { Header } from "@/components/Header";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col h-full">
      <Header />
      <div className="flex flex-grow">
        <SideNav />
        <main className="ml-32 p-8 flex-grow">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
