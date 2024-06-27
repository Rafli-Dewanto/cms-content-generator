import { forwardRef } from "react";
import { useMediaQuery } from "usehooks-ts";
import { Show, ClientOnly } from "@elements";
import SidebarDesktop from "./sidebar-desktop";
import SidebarMobile from "./sidebar-mobile";

type SideBarProps = {
  isOpen: boolean;
  onClose: () => void;
};

const SideBar = forwardRef<HTMLDivElement, SideBarProps>((props, ref) => {
  const { isOpen, onClose } = props;
  const isMobile = useMediaQuery("( max-width: 1024px )");

  return (
    <ClientOnly>
      <Show when={isMobile} fallback={<SidebarDesktop />}>
        <SidebarMobile isOpen={isOpen} onClose={onClose} ref={ref} isMobile={isMobile} />
      </Show>
    </ClientOnly>
  );
});

export default SideBar;
