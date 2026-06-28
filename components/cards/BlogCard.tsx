import Image from "next/image";
import Link from "next/link";
import Badge from "@/components/ui/Badge";
import { BlogPost } from "@/lib/types";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col gap-4 bg-white rounded-2xl overflow-hidden border border-carbon-black-5 hover:shadow-lg transition-shadow duration-300"
    >
      <div className="relative h-[220px] overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col gap-3 p-6">
        {post.category && <Badge label={post.category} variant="blue" />}
        <h3 className="font-heading text-[20px] leading-[1.3] text-carbon-black group-hover:text-sky-blue transition-colors duration-200 line-clamp-2">
          {post.title}
        </h3>
        <p className="font-body text-[15px] leading-[1.5] text-steel-gray line-clamp-2">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between pt-2 border-t border-carbon-black-5">
          <span className="font-body text-[13px] text-steel-gray">{post.author}</span>
          <span className="font-body text-[13px] text-steel-gray">
            {new Date(post.date).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </span>
        </div>
      </div>
    </Link>
  );
}
