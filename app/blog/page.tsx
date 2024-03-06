import PageLayout from "@/components/PageLayout";
import { allPosts } from "contentlayer/generated";
import Image from "next/image";
import Link from "next/link";

export default function BlogPage() {
  return (
    <PageLayout
      title="Blog"
      description="공유하고 싶거나 다시 보고 싶은 기술들을 정리합니다."
    >
      {allPosts
        .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))
        .map((post) => (
          <Link
            href={`/blog/${post.slug}`}
            key={post.slug}
            className="flex py-5 items-start justify-between gap-2"
          >
            <div className="flex flex-col gap-1 flex-1">
              <span className="font-bold text-lg break-keep">
                {" "}
                {post.title}
              </span>
              <span>{post.description}</span>
              <time className="text-xs text-gray-500 mt-1">{post.date}</time>
            </div>
            <Image
              width={150}
              height={150}
              src={post.thumbnail}
              alt={post.title}
              className="object-cover w-32 h-24 rounded"
            />
          </Link>
        ))}
    </PageLayout>
  );
}