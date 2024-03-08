"use client";

import Link from "next/link";
import Nav from "./Nav";
// import MobileNav from "./mobile-nav";
import Image from "next/image";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function Header() {
  return (
    <header className="h-14 px-5 sticky top-0 z-50 w-full border-b flex justify-between items-center bg-white">
      <div className="flex items-center gap-1">
        <Logo />
      </div>
      <div className="flex items-center flex-1 justify-end gap-4">
        {/* <MobileNav /> */}
        <Nav />
        <ThemeChanger />
      </div>
    </header>
  );
}

function Logo() {
  return (
    <Link href="/" className="font-extrabold">
      <Image width={35} height={35} src="/logo.jpg" alt="로고" className="rounded-full" />
    </Link>
  );
}

function ThemeChanger() {
  const { setTheme, theme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button type="button" variant="outline" size="icon" onClick={toggleTheme}>
      <Sun className="h-5 w-5 transition-all dark:hidden" />
      <Moon className="h-5 w-5 hidden transition-all dark:block" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
