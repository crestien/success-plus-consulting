import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { Post } from "@/lib/blog";
import { cn } from "@/lib/utils";

/**
 * Most legacy blog images are wide banners with the title baked in, so they
 * are shown whole (object-contain) over a blurred, cropped copy of themselves.
 */
export function PostImage({ src, sizes, priority }: { src: string; sizes: string; priority?: boolean }) {
  return (
    <>
      <Image src={src} alt="" fill aria-hidden sizes="200px" className="scale-125 object-cover opacity-70 blur-2xl" />
      <Image
        src={src}
        alt=""
        fill
        priority={priority}
        sizes={sizes}
        className="object-contain transition-transform duration-500 group-hover:scale-[1.03]"
      />
    </>
  );
}

export function PostCard({ post, featured = false, className }: { post: Post; featured?: boolean; className?: string }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={cn(
        "group reveal spotlight relative flex flex-col overflow-hidden rounded-3xl border border-border bg-white transition-all duration-300 hover:-translate-y-1 hover:border-navy/20 hover:shadow-[0_24px_48px_-24px_rgb(20_21_47/0.35)]",
        featured && "lg:grid lg:grid-cols-12",
        className,
      )}
    >
      <div
        className={cn(
          "relative overflow-hidden bg-navy",
          featured ? "aspect-[16/9] lg:col-span-7 lg:aspect-auto lg:min-h-[340px]" : "aspect-[16/9]",
        )}
      >
        {post.image ? (
          <PostImage src={post.image} sizes={featured ? "(min-width: 1024px) 60vw, 100vw" : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"} />
        ) : (
          <div aria-hidden className="absolute inset-0 grid place-items-center bg-gradient-to-br from-navy to-ink">
            <span className="font-display px-8 text-center text-2xl text-white/80">{post.categories[0] ?? "Insights"}</span>
          </div>
        )}
      </div>
      <div className={cn("flex flex-1 flex-col p-6 sm:p-7", featured && "lg:col-span-5 lg:justify-center lg:p-10")}>
        {post.categories[0] && (
          <p className="text-xs font-semibold tracking-[0.14em] text-navy-light uppercase">{post.categories[0]}</p>
        )}
        <h3 className={cn("font-display mt-3 font-medium text-ink", featured ? "text-3xl leading-tight sm:text-4xl" : "text-xl leading-snug")}>
          {post.title}
        </h3>
        {post.excerpt && (
          <p className={cn("mt-3 flex-1 leading-relaxed text-muted-foreground", featured ? "text-lg" : "line-clamp-3 text-sm")}>
            {post.excerpt}
          </p>
        )}
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-navy">
          Read article
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
        </span>
      </div>
    </Link>
  );
}
