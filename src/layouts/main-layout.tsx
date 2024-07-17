/* eslint-disable react/jsx-no-useless-fragment */
import Sidebar from "@/components/sidebar";
import { Toaster } from "@/components/ui/toaster";
import useDisclosure from "@/hooks/use-disclosure";
import { Menu } from "lucide-react";
import { Sarabun } from "next/font/google";
import React, { useRef } from "react";
import { useOnClickOutside } from "usehooks-ts";

const sarabun = Sarabun({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const { onClose, isOpen, onToggle } = useDisclosure(false);
  const ref = useRef<HTMLDivElement | null>(null);
  useOnClickOutside(ref, () => onClose());

  return (
    <main className={`flex ${sarabun.className}`}>
      <div className="fixed left-0 right-0 top-0 z-[100] flex h-7 w-full items-center bg-white py-12 lg:hidden">
        <Menu className="mx-7 cursor-pointer" onClick={() => onToggle()} />
      </div>
      <Sidebar ref={ref} onClose={onClose} isOpen={isOpen} />
      <section className="container my-20 max-w-7xl pt-5 lg:ml-72 lg:pt-0">{children}</section>
      <Toaster />
    </main>
  );
};

export default MainLayout;
