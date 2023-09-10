"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineHome } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";
import { BsPlusSquare } from "react-icons/bs";
import { BsPlusSquareFill } from "react-icons/bs";
import { RiSearchLine } from "react-icons/ri";
import { RiSearchFill } from "react-icons/ri";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="flex justify-between items-center bg-white p-8 sticky top-0 border-b z-10">
      <h1 className="text-4xl font-bold">Instantgram</h1>
      <span className="flex gap-4 items-center">
        <Link href="/">
          {pathname === "/" ? (
            <AiFillHome size={"2rem"} />
          ) : (
            <AiOutlineHome size={"2rem"} />
          )}
        </Link>
        <Link href="/search">
          {pathname === "/search" ? (
            <RiSearchFill size={"2rem"} />
          ) : (
            <RiSearchLine size={"2rem"} />
          )}
        </Link>
        <Link href="/new">
          {pathname === "/new" ? (
            <BsPlusSquareFill size={"2rem"} />
          ) : (
            <BsPlusSquare size={"2rem"} />
          )}
        </Link>
        <div className="rounded-md bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300 p-[0.15rem]">
          <button className="bg-white rounded-sm text-base p-[0.3rem] hover:opacity-90 transition-opacity">
            Sign In
          </button>
        </div>
      </span>
    </header>
  );
}
