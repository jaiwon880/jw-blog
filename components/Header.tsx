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
    <header className="h-14 px-5 sticky top-0 z-50 w-full border-b flex justify-between items-center bg-background">
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

 // 현재 테마가 'dark'이면 true, 그렇지 않으면 false
 const isDarkMode = theme === 'dark';

 return (
   <Button type="button" variant="outline" size="icon" onClick={toggleTheme}>
     {isDarkMode ? (
       // 다크 모드일 때는 달 아이콘 표시
       <Moon className="h-5 w-5 transition-all" />
     ) : (
       // 라이트 모드일 때는 태양 아이콘 표시
       <Sun className="h-5 w-5 transition-all" />
     )}
     <span className="sr-only">Toggle theme</span>
   </Button>
 );
}
