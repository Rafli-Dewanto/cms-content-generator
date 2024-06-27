import { cn } from "@/lib/utils";
import React, { forwardRef } from "react";

interface SidebarListItemProps extends React.ComponentPropsWithRef<"li"> {
  children: React.ReactNode;
  className?: string;
}

const SideBarListItem = forwardRef<HTMLLIElement, SidebarListItemProps>((props, ref) => {
  const { children, className } = props;
  return (
    <li
      ref={ref}
      {...props}
      className={cn(
        `flex cursor-pointer items-center justify-start space-x-2 rounded-lg px-2 py-2 font-medium text-zinc-800 transition-all hover:bg-blue-100 hover:text-[#153973]`,
        className
      )}
    >
      {children}
    </li>
  );
});

export default SideBarListItem;
