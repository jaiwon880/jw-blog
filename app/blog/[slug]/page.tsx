import { notFound } from "next/navigation";
import { allPosts } from "contentlayer/generated";
import type { Metadata } from "next";
import { Mdx } from "./components/mdx";
import { metadata } from "@/app/layout";

interface Props {
  params: {
    slug: string;
  };
}

// 동적 라우트 데이터 처리
async function getDocFromParams({ params }: Props) {
  const slug = params.slug;
  const doc = allPosts.find((doc) => doc.slug === slug);

  return doc ?? null; // 문서가 없으면 null 반환
}

export default async function DocPage({ params }: Props) {
  const post = await getDocFromParams({ params });

  if (!post) {
    notFound();
  }

  return (
    <div className="flex flex-col mt-5 gap-1">
      <h1 className="text-3xl font-black bg-gradient-to-r from-slate-600 via-slate-300 to-slate-700 inline-block text-transparent bg-clip-text">
        {post.title}
      </h1>
      <time className="text-gray-500 text-sm mt-2 ml-auto">{post.date}</time>
      <Mdx code={post.body.code} />
    </div>
  );
}

// 정적 라우트 생성
export async function generateStaticParams() {
  return allPosts.map((doc) => ({
    slug: doc.slug, // slug 정보
  }));
}

// 메타데이터 생성
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const doc = await getDocFromParams({ params });

  if (!doc) {
    return {};
  }

  return {
    title: doc.title,
    description: doc.description,
  };
}