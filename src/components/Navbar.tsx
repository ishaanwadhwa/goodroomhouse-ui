"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button, Navbar as UiNavbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const NAV_LINKS = [
  { href: "/team", label: "The Housemakers" },
  { href: "/spirit", label: "The Spirit of the House" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <UiNavbar
      maxWidth="full"
      isBordered={false}
      className="fixed top-0 left-0 right-0 z-50 bg-transparent border-none shadow-none backdrop-blur-none"
      style={{ backgroundColor: "transparent", backdropFilter: "none" }}
    >
      <NavbarBrand>
        <Link href="/" className="text-white/70 hover:text-white transition-colors font-display tracking-wider">
          Good Room House
        </Link>
      </NavbarBrand>

      {/* Desktop nav */}
      <NavbarContent justify="end" className="hidden md:flex gap-6">
        {NAV_LINKS.map((link) => (
          <NavbarItem key={link.href}>
            <Link href={link.href} className="text-sm text-white hover:text-accent transition-colors">
              {link.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Mobile toggle */}
      <NavbarContent justify="end" className="md:hidden">
        <Button isIconOnly variant="light" aria-label="Open menu" onPress={() => setIsOpen(true)}>
          <Bars3Icon className="h-7 w-7 text-white" />
        </Button>
      </NavbarContent>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm md:hidden">
          <div className="absolute top-0 right-0 left-0 flex items-center justify-end p-4">
            <Button isIconOnly variant="light" aria-label="Close menu" onPress={() => setIsOpen(false)}>
              <XMarkIcon className="h-7 w-7 text-white" />
            </Button>
          </div>
          <nav className="mt-24 flex flex-col items-center gap-6 text-lg">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="text-white hover:text-accent" onClick={() => setIsOpen(false)}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </UiNavbar>
  );
}

export default Navbar;


