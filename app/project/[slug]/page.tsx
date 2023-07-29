import { allProjects } from "@/.contentlayer/generated";
import { LinkIcon } from "@heroicons/react/24/outline";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

interface PropsInterface {
	slug: string;
}

export function generateMetadata({
	params,
}: {
	params: PropsInterface;
}): Metadata {
	const data = allProjects.find(
		(item) => item.url === `/project/${params.slug}`
	);
	return {
		title: `Study Case ${data?.title} - Taufik Nurhidayat`,
		description: data?.body.raw.substring(0, 150) || "",
	};
}
export default function ProjectReader({ params }: { params: PropsInterface }) {
	const data = allProjects.find(
		(item) => item.url === `/project/${params.slug}`
	);
	if (!data) notFound();
	return (
		<div className="prose mx-auto my-8">
			<article>
				<header>
					<h1>{data.title}</h1>
					<figure className="aspect-video w-full relative">
						<Image src={data.cover} alt={data.title} fill />
					</figure>
					<div className="not-prose">
						<a
							className="px-4 py-3 rounded bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-500 duration-300 inline-flex"
							href={data.website}
						>
							<LinkIcon className="w-6 h-6 mr-2" />
							<span>Visit Website</span>
						</a>
					</div>
				</header>
				<section dangerouslySetInnerHTML={{ __html: data.body.html }} />
			</article>
		</div>
	);
}
