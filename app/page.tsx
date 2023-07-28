import { supabase } from "@/lib/supabase";
import AboutMe from "./about";
import FeaturedBlog from "./featured-blog";
import FeaturedProject from "./featured-project";
import ProjectButton from "@/components/project-button";

export default async function HomePage() {
	const { data, error } = await supabase
		.from("blogs")
		.select("title,slug,cover,excerpt,description,author(*),readTime")
		.eq("author", "a587dbdf-4abd-46a8-910f-5f8a288f6511")
		.eq("draft", false)
		.order("publishedAt", { ascending: false })
		.limit(6);

	return (
		<div>
			<AboutMe />
			<FeaturedProject />
			<ProjectButton />
			<FeaturedBlog data={data || []} />
		</div>
	);
}
