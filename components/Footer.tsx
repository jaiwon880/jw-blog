"use client";

import { useState, useEffect } from "react";
import { getTzDay } from "./Days";
import { GithubIcon, LinkedinIcon } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // 컴포넌트가 클라이언트에서 렌더링되었음을 설정
    setMounted(true);
  }, []);

  if (!mounted) {
    // 서버에서 렌더링 시 아무것도 렌더링하지 않음
    return null;
  }
  return (
    <footer className="flex flex-col items-center justify-center w-full h-28 gap-3">
      <div className="flex items-center justify-center gap-3" suppressHydrationWarning>
        <Link href="https://github.com/jaiwon880" target="_blank">
          <GithubIcon size={20} className="text-slate-500" suppressHydrationWarning />
        </Link>
        <Link href="https://www.linkedin.com/in/JoyHan01/" target="_blank">
          <LinkedinIcon size={20} className="text-slate-500" suppressHydrationWarning />
        </Link>
      </div>
      <span className="text-xs text-slate-500">
        Copyright © {getTzDay(new Date()).get("year")} Joy Han
      </span>
    </footer>
  );
}