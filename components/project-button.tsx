import Link from "next/link";
export default function ProjectButton() {
  return (
    <div className="my-20">
      <div className="bg-slate-100 md:flex items-center p-8">
        <div className="text-xl font-bold text-slate-600 text-center md:text-left">
          Tertarik dengan pekerjaan saya?
        </div>
        <div className="ml-auto mt-8 md:mt-0 flex justify-center gap-4 md:w-auto text-sm">
          <Link
            href="/project"
            className="duration-300 inline-flex items-center px-4 py-3 rounded text-primary-500 border border-primary-500"
          >
            More Project
          </Link>
          <a
            href="mailto:taufik@nurhidayat.web.id"
            className="duration-300 inline-flex items-center px-4 py-3 rounded bg-primary-500 text-white hover:shadow-lg hover:shadow-primary-600/50 hover:bg-primary-600"
          >
            Email Me
          </a>
        </div>
      </div>
    </div>
  );
}
