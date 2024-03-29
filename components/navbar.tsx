"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import brand from "@/app/icon.svg";

import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

interface navigationInterface {
  title: string;
  href: string;
}
export default function Navbar() {
  const path = usePathname();
  const [openMenu, setOpenMenu] = useState(false);
  const [hidePart, setHidePart] = useState(false);
  const navigations: navigationInterface[] = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Blog",
      href: "https://nurhidayat.web.id",
    },
    {
      title: "Project",
      href: "/project",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ];

  const handleMenu = () => {
    setOpenMenu(!openMenu);
    document.documentElement.classList.toggle("overflow-hidden");
  };

  useEffect(() => {
    setOpenMenu(false);
    document.documentElement.classList.remove("overflow-hidden");
    function listener() {
      if (scrollY > 128) {
        setHidePart(true);
      } else {
        setHidePart(false);
      }
    }
    document.addEventListener("scroll", listener);
    return () => document.removeEventListener("scroll", listener);
  }, [path]);
  return (
    <>
      <header
        className={`sticky top-0 z-10 bg-white ${hidePart ? "shadow" : null}`}
      >
        <nav className="flex gap-4 items-center container px-4 py-4 mx-auto text-slate-600">
          <Link
            href="/"
            className="flex items-center text-2xl uppercase font-bold"
          >
            <Image src={brand} alt="Taufik Nurhidayat" className="w-10" />
          </Link>
          <button
            aria-label="Menu"
            onClick={() => handleMenu()}
            className="flex p-2 notap lg:hidden ml-auto -mr-2"
            aria-expanded={openMenu}
            aria-haspopup="true"
            aria-controls="navigations"
          >
            <Bars2Icon className="w-6 h-6" />
          </button>
          <ul className="hidden lg:flex ml-auto text-lg">
            {navigations.map((item, i) => (
              <li key={i}>
                <Link
                  className={`hover:text-primary-500 px-4 py-3 flex duration-300`}
                  href={item.href}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <nav
        className={`fixed bg-white text-slate-600 top-0 left-0 bottom-0 right-0 z-30 ${
          openMenu ? null : "hidden"
        }`}
      >
        <div className="flex mt-2">
          <button className="px-4 py-4 ml-auto" onClick={() => handleMenu()}>
            <XMarkIcon className="w-6 h-6" />
          </button>
        </div>
        <div>
          {navigations.map((item, i: number) => (
            <Link
              key={i}
              href={item.href}
              className="flex px-8 py-3 justify-center hover:text-primary-500 notap"
            >
              {item.title}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}
