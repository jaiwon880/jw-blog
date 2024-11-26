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
      <span className="break-keep leading-9">
        <b className="text-base">생각한 것을 구현하고 문제를 해결하는 개발자입니다.</b>
        <p>
          서비스 시장의 공백을 인식하고 이에 따라 다양한 서비스를 기획하고 개발하는 데 집중하고 있습니다.
        </p>
        <p>
          또한, 사용자의 다양한 행동 패턴을 분석하며 서비스의 빈틈을 찾아 이를 해결하는 것에 흥미를 느낍니다.
        </p>
      </span>
    </div>
  );
}