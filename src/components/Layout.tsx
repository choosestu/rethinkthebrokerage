import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import S2ChatButton from "./S2ChatButton";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <div className="flex flex-col min-h-screen">
    <Navbar />
    <main className="flex-1 pt-24">{children}</main>
    <Footer />
    <S2ChatButton />
  </div>
);

export default Layout;
