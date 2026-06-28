import BlogCard from "@/components/cards/BlogCard";
import AnimateIn from "@/components/ui/AnimateIn";
import { posts } from "@/data/blog";

export default function BlogPage() {
  return (
    <>
      <section className="bg-navy-blue pt-[160px] pb-[100px]">
        <div className="max-w-[1460px] mx-auto px-[30px]">
          <div className="max-w-[700px]">
            <AnimateIn y={16}><p className="font-body text-[14px] font-medium tracking-widest uppercase text-sky-blue mb-6">Blog</p></AnimateIn>
            <AnimateIn delay={0.1}><h1 className="font-heading text-[56px] lg:text-[72px] leading-[1.08] text-white mb-8">Insights & stories</h1></AnimateIn>
            <AnimateIn delay={0.2}><p className="font-body text-[20px] leading-[1.5] text-white/75">Articles, research highlights, and stories from the frontlines of patient safety in Tanzania.</p></AnimateIn>
          </div>
        </div>
      </section>

      <section className="py-[100px]">
        <div className="max-w-[1460px] mx-auto px-[30px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <AnimateIn key={post.slug} delay={i * 0.1}>
                <BlogCard post={post} />
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
