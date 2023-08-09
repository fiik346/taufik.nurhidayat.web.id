import Link from "next/link";
import brand from "@/app/icon.svg";
import Image from "next/image";

export default function Footer() {
  const navigations = [
    {
      title: "Navigation",
      items: [
        {
          title: "About",
          href: "/about",
        },

        {
          title: "Contact",
          href: "/contact",
        },
        {
          title: "Project",
          href: "/project",
        },
      ],
    },
    {
      title: "Connect",
      items: [
        {
          title: "Blog",
          href: "https://www.nurhidayat.web.id",
        },
        {
          title: "Facebook",
          href: "https://facebook.com/fik346",
        },
        {
          title: "GitHub",
          href: "https://github.com/fiik346",
        },
        {
          title: "Linkedin",
          href: "https://linkedin.com/in/taufik-nurhidayat",
        },
      ],
    },
  ];
  return (
    <div className="bg-slate-100 text-slate-600">
      <div className="container mx-auto px-4 py-8">
        <nav className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center font-semibold">
              <Image src={brand} className="w-10 mr-4" alt="Nurhidayat" />
              <span>Taufik Nurhidayat</span>
            </div>
          </div>
          {navigations.map((nav, i) => (
            <div key={i}>
              <h3 className="font-semibold">{nav.title}</h3>
              <ul className="mt-2">
                {nav.items.map((item, i) => (
                  <li key={i}>
                    <Link
                      className="py-1 flex hover:text-slate-800"
                      href={item.href}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}
