import Image from "next/image";
import { allProjects } from "contentlayer/generated";
import Link from "next/link";

export default function ProjectPage() {
  const data = allProjects;
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {data.map((item, i: number) => (
          <div className="relative" key={i}>
            <div className="aspect-video relative">
              <Link href={item.url}>
                <Image src={item.cover} fill alt={item.title} />
              </Link>
            </div>
            <h2 className="text-slate-600 font-semibold text-xl mt-4">
              <Link href={item.url}>{item.title}</Link>
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}
