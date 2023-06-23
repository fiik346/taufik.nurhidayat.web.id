import taufikImage from "@/public/taufik.jpg";
import Image from "next/image";
import { ArrowDownTrayIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
export default function AboutMe() {
  return (
    <div className="flex flex-wrap lg:flex-nowrap lg:gap-8 items-center">
      <div className="w-full lg:w-1/2 px-4 lg:py-8 flex items-center justify-center lg:order-last">
        <Image
          src={taufikImage}
          alt="Taufik Nurhidayat"
          className="rounded-full w-64"
        />
      </div>
      <div className="py-10 w-full lg:w-1/2 text-slate-700">
        <p className="text-xl">Hi, saya Taufik Nurhidayat</p>
        <h1 className="text-4xl mt-2 font-bold">
          Seorang Frontend Developer dan Writer
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
            className="duration-300 inline-flex items-center px-4 py-3 rounded-lg bg-primary-500 text-white hover:shadow-lg hover:bg-primary-600"
            href="mailto:taufik@nurhidayat.web.id"
          >
            <EnvelopeIcon className="w-6 h-6" />
            <span className="ml-2">Email Me</span>
          </a>
          <a
            className="duration-300 inline-flex items-center px-4 py-3 rounded-lg hover:text-slate-500 hover:bg-slate-100"
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
