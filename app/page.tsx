import { supabase } from "@/lib/supabase";
import AboutMe from "./about";
import FeaturedBlog from "./featured-blog";
import FeaturedProject from "./featured-project";
import ProjectButton from "@/components/project-button";
const apiUrl = process.env.NEXT_PUBLIC_SUPABASE_API_URL;
const apiKey = process.env.NEXT_PUBLIC_SUPABASE_API_KEY;

export default async function HomePage() {
	// const res = await fetch(
	//   `${apiUrl}/rest/v1/blogs?select=title,slug,cover,excerpt,description,author(username,name)&author.username=eq.taufik&author=not.is.null&limit=6&order=updatedAt.desc&apikey=${apiKey}`
	// );
	// const data = await res.json();
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
