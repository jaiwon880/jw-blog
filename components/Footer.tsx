import { getTzDay } from "./Days";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center w-full h-28 gap-3">
      <div className="flex items-center justify-center gap-3">
        <Link href="https://github.com/jaiwon880" target="_blank">
          <GithubIcon size={20} className="text-slate-500" />
        </Link>
        <Link href="https://www.linkedin.com/in/JoyHan01/" target="_blank">
          <LinkedinIcon size={20} className="text-slate-500" />
        </Link>
        <Link href="https://twitter.com/zxcvbnmjaiwon" target="_blank">
          <TwitterIcon size={20} className="text-slate-500" />
        </Link>
      </div>
      <span className="text-xs text-slate-500">
        Copyright © {getTzDay(new Date()).get("year")} Joy Han
      </span>
    </footer>
  );
}