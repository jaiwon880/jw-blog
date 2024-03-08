import PageLayout from "@/components/PageLayout";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
    return (
        <div className="flex flex-col items-center justify-center gap-5 sm:flex-row sm:items-start">
          <Image
            width={300}
            height={100}
            src="/about/jw_github.jpg"
            alt="jw 프로필 이미지"
            className="rounded"
            quality={100}
          />
          <span className="break-keep leading-8">
            <b>어떤 분야의 전문가가 되기 위해서는 최소 1만 시간 정도의 훈련이 필요하다.</b>
          </span>
        </div>
      );
    }