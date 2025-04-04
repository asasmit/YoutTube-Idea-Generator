"use client";

import Link from "next/link";
import { UserButton, useAuth } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { SettingsModal } from "./SettingsModal";

export default function Navbar() {
  const pathname = usePathname();
  const { isSignedIn } = useAuth();

  const navLinks = [
    { href: "/videos", label: "Videos" },
    { href: "/ideas", label: "Ideas" },
  ];

  return (
    <header>
      <nav className="py-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-1">
            <span className="text-xl font-semibold">Idea Gen</span>
            <span className="text-xl">💡</span>
          </Link>

          {/* Authenticated view */}
          {isSignedIn ? (
            <div className="flex items-center space-x-8 ml-auto mr-4 text-md">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-md",
                    pathname.startsWith(link.href)
                      ? "border-b-2 border-red-500 text-red-500"
                      : "text-primary hover:text-red-500 transition-all"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <SettingsModal />
              <UserButton
                appearance={{
                  elements: {
                    avatarBox: "w-8 h-8",
                  },
                }}
              />
            </div>
          ) : (
            <Link href="/videos">
              <Button className="font-semibold text-white bg-red-500 hover:bg-red-600">
                Get Started Now
              </Button>
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}
