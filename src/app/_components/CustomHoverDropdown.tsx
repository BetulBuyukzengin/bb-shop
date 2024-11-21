"use client";
import { HoverDropdownType } from "@/app/_interfaces/hoverDropdown.types";
import {
  Box,
  HoverCardArrow,
  HoverCardContent,
  HoverCardRoot,
  HoverCardTrigger,
} from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";

function CustomHoverDropdown({
  children,
  title,
  icon,
  href,
}: HoverDropdownType) {
  const [open, setOpen] = useState(false);

  return (
    <HoverCardRoot
      size="md"
      open={open}
      onOpenChange={(e) => setOpen(e.open)}
      immediate
    >
      <HoverCardTrigger
        asChild
        className="grid grid-cols-[.2fr_1fr] text-start gap-3 cursor-pointer"
      >
        <div className="">
          {icon && <>{icon}</>}
          <Link href={`/${href}`}>{title}</Link>
        </div>
      </HoverCardTrigger>
      <HoverCardContent maxWidth="240px" className="bg-slate-50">
        <HoverCardArrow />
        <Box>{children}</Box>
      </HoverCardContent>
    </HoverCardRoot>
  );
}

export default CustomHoverDropdown;
