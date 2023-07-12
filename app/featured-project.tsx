import Image from "next/image";
import Link from "next/link";

export default function FeaturedProject() {
  const data = [
    {
      title: "Nurhidayat",
      cover: "/nurhidayat/cover.png",
      url: "/project/nurhidayat",
    },
  ];
  return (
    <div className="my-10">
      <h2 className="text-2xl font-bold text-slate-700" id="featured-project">
        Featured Project
      </h2>
      <div className="mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {data.map((item, i: number) => (
            <div className="group relative" key={i}>
              <Image
                src={item.cover}
                width={1280}
                height={720}
                className="w-full"
                alt={item.title}
              />
              <Link
                aria-hidden="true"
                href="/"
                className="opacity-0 group-hover:opacity-100 duration-300 ease-in-out flex absolute w-full bg-black/50 h-full top-0 left-0 items-center justify-center"
              >
                <span className="text-white font-semibold px-4 py-3 rounded border border-white">
                  Lihat
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
