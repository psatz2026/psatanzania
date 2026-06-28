import Image from "next/image";
import { notFound } from "next/navigation";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { posts } from "@/data/blog";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  return (
    <>
      <section className="bg-navy-blue pt-[160px] pb-[80px]">
        <div className="max-w-[1460px] mx-auto px-[30px]">
          <Button label="← All articles" href="/blog" variant="ghost" className="!text-white/60 hover:!text-white mb-8 !px-0" />
          <div className="max-w-[800px]">
            {post.category && <div className="mb-4"><Badge label={post.category} variant="blue" /></div>}
            <h1 className="font-heading text-[46px] lg:text-[60px] leading-[1.1] text-white mb-6">{post.title}</h1>
            <div className="flex items-center gap-4 text-white/60 font-body text-[14px]">
              <span>{post.author}</span>
              <span>·</span>
              <span>{new Date(post.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-[80px]">
        <div className="max-w-[800px] mx-auto px-[30px]">
          <div className="relative h-[400px] rounded-2xl overflow-hidden mb-12">
            <Image src={post.image} alt={post.title} fill className="object-cover" />
          </div>
          <p className="font-body text-[18px] leading-[1.7] text-steel-gray mb-6">{post.excerpt}</p>
          <div className="font-body text-[17px] leading-[1.8] text-carbon-black whitespace-pre-line">{post.content}</div>
        </div>
      </section>
    </>
  );
}
