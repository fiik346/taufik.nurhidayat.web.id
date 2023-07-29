import { supabase } from "@/lib/supabase";
import AboutMe from "./about";
import FeaturedBlog from "./featured-blog";
import ProjectList from "@/components/project-list";
import ProjectButton from "@/components/project-button";

export const revalidate = 60;

import { allProjects } from "contentlayer/generated";

export default async function HomePage() {
  const project = allProjects;
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
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-slate-700" id="featured-project">
          Featured Project
        </h2>
        <div className="mt-8">
          <ProjectList data={project} />
        </div>
      </div>
      <div className="mt-8">
        <ProjectButton />
      </div>
      <div className="mt-12">
        <FeaturedBlog data={data || []} />
      </div>
    </div>
  );
}
