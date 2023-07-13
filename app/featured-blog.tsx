import Image from "next/image";

export default function FeaturedBlog({ data }: { data: any }) {
  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold text-slate-700">Blog</h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {data.map((item: any, i: any) => (
          <div
            key={i}
            className="border flex flex-wrap hover:shadow-lg duration-300 ease-in-out"
          >
            <div className="w-full">
              <div className="w-full aspect-[40/21] relative">
                <a href={`https://www.nurhidayat.web.id/blog/${item.slug}`}>
                  <Image
                    src={item.cover?.baseUrl || "/noimage.png"}
                    alt={item.title}
                    fill
                    className="object-contain"
                  />
                </a>
              </div>
              <div className="w-full h-auto p-6">
                <h3 className="text-lg font-semibold">
                  <a
                    href={`https://www.nurhidayat.web.id/blog/${item.slug}`}
                    className="text-slate-700 hover:text-slate-800 duration-150"
                  >
                    {item.title}
                  </a>
                </h3>
                <p className="mt-2 text-slate-500 line-clamp-5">
                  {item.excerpt || item.description}
                </p>
              </div>
            </div>
            <div className="w-full mt-auto text-sm px-6 py-4 border-t flex items-center gap-4">
              <div>
                <Image
                  src={item.author.avatar.baseUrl}
                  width={40}
                  height={40}
                  className="rounded-full"
                  alt={item.author.name}
                />
              </div>
              <div className="text-slate-500">
                <div>{item.author.name}</div>
                <div>{item.readTime.text}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
