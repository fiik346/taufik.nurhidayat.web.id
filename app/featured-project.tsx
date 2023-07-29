import Image from "next/image";
import Link from "next/link";
interface DataInterface {
  title: string;
  cover: string;
  url: string;
}
export default function FeaturedProject({ data }: { data: DataInterface[] }) {
  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold text-slate-700" id="featured-project">
        Featured Project
      </h2>
      <div className="mt-8">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
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
                href={item.url}
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
