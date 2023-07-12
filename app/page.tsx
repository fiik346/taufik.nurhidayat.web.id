import AboutMe from "./about";
import FeaturedBlog from "./featured-blog";
import FeaturedProject from "./featured-project";

export default function Home() {
  return (
    <div className="container mx-auto px-8">
      <AboutMe />
      <FeaturedProject />
      <FeaturedBlog />
    </div>
  );
}
