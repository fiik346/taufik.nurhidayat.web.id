import { Project } from "contentlayer/generated";
import Image from "next/image";
import Link from "next/link";

export default function ProjectList({ data }: { data: Project[] }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {data.map((item, i: number) => (
        <div key={i} className="group relative">
          <Link href={item.url}>
            <Image
              src={item.cover}
              width={1280}
              height={720}
              className="w-full"
              alt={item.title}
            />
          </Link>
          <Link
            href={item.url}
            aria-hidden="true"
            className="opacity-0 group-hover:opacity-100 duration-300 ease-in-out flex absolute w-full bg-black/50 h-full top-0 left-0 items-center justify-center"
          >
            <span className="text-white font-semibold px-4 py-3 rounded border border-white">
              Lihat
            </span>
          </Link>
        </div>
      ))}
    </div>
  );
}
