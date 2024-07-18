import useAuth from "@/hooks/use-auth";
import { motion } from "framer-motion";
import { Home, LogOut, PlusCircle, X } from "lucide-react";
import Link from "next/link";
import { forwardRef, useEffect } from "react";
import SideBarListItem from "./sidebar-list-item";

type Props = {
  isOpen: boolean;
  isMobile: boolean;
  onClose: () => void;
};

const SidebarMobile = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { isOpen, onClose, isMobile } = props;
  const { logout } = useAuth();

  useEffect(() => {
    if (isMobile) {
      onClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobile]);

  return (
    <div ref={ref}>
      <motion.aside
        variants={{
          open: { opacity: 1, x: 0, transition: { duration: 0.3 } },
          closed: {
            opacity: 0,
            x: "-100%",
            transition: {
              duration: 0.2,
            },
          },
        }}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        className={` ${isOpen ? "block" : "hidden"} fixed bottom-0 left-0 top-0 z-[500] min-h-screen w-64 shrink translate-x-0 transform flex-col overflow-hidden rounded-r-lg bg-white py-8 text-gray-950 drop-shadow-md transition-all duration-300 ease-in-out lg:block`}
      >
        <div className="mb-8 flex h-12 px-4">
          <Link
            className="mx-auto flex items-center gap-2 text-center text-lg font-semibold uppercase tracking-widest"
            href="/"
          >
            Eraspace CMS
          </Link>
          <button className="lg:hidden" onClick={onClose}>
            <X />
          </button>
        </div>
        <section className="container relative h-screen py-8">
          <p className="mx-2 text-base font-medium tracking-wide text-gray-800">Main Menu</p>
          <nav className="py-2">
            <ul className="mt-4 flex h-screen flex-col space-y-1">
              <SideBarListItem>
                <Home />
                <Link className="w-full" href={"/"}>
                  Dashboard
                </Link>
              </SideBarListItem>
              <SideBarListItem>
                <PlusCircle />
                <Link className="w-full" href={"/contents"}>
                  Add Content
                </Link>
              </SideBarListItem>
              <button onClick={() => logout()}>
                <SideBarListItem className="!mt-[12rem] cursor-pointer items-end rounded-md border border-gray-200 hover:bg-red-300 hover:text-red-900">
                  <LogOut width={20} height={20} />
                  <span className="w-full">Logout</span>
                </SideBarListItem>
              </button>
            </ul>
          </nav>
        </section>
      </motion.aside>
    </div>
  );
});

export default SidebarMobile;
