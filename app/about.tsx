import Image from "next/image";
import { ArrowDownTrayIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

import profilePicture from "./profile.png";

export default function AboutMe() {
  return (
    <div className="flex flex-wrap lg:flex-nowrap gap-4 lg:gap-8 items-center">
      <div className="w-full lg:w-5/12 px-10 md:p-8 flex items-center justify-center lg:order-last">
        <div>
          <Image src={profilePicture} alt="Taufik Nurhidayat" />
        </div>
      </div>
      <div className="w-full lg:w-7/12 text-slate-700">
        <p className="text-xl">Hi, saya Taufik Nurhidayat</p>
        <h1 className="text-4xl mt-2 font-bold">
          Frontend Web Developer dan Writer
        </h1>
        <p className="text-slate-600 mt-8">
          Saya adalah seorang frontend developer yang juga memiliki hasrat dalam
          dunia tulisan. Mulai mengembangkan web{" "}
          <a
            className="text-slate-800 hover:underline"
            href="//Nurhidayat.web.id"
          >
            Nurhidayat
          </a>
          , lalu mengisinya dengan konten yang berkualitas. Selain itu saya juga
          menulis untuk{" "}
          <a
            className="text-slate-800 hover:underline"
            href="//play.id"
            rel="nofollow"
          >
            Play.id
          </a>{" "}
          dan{" "}
          <a
            href="//dewabiz.com"
            rel="nofollow"
            className="text-slate-800 hover:underline"
          >
            Dewabiz
          </a>
          .
        </p>

        <div className="mt-8 flex gap-4 flex-wrap items-center text-sm">
          <a
            className="duration-300 inline-flex items-center px-4 py-3 rounded bg-primary-500 text-white hover:shadow-lg hover:shadow-primary-600/50 hover:bg-primary-600"
            href="mailto:taufik@nurhidayat.web.id"
          >
            <EnvelopeIcon className="w-6 h-6" />
            <span className="ml-2">Email Me</span>
          </a>
          <a
            className="duration-300 inline-flex items-center px-4 py-3 rounded hover:text-slate-500 hover:bg-slate-100"
            href="/cv.pdf"
          >
            <ArrowDownTrayIcon className="w-6 h-6" />
            <span className="ml-2">Download CV</span>
          </a>
        </div>
      </div>
    </div>
  );
}
