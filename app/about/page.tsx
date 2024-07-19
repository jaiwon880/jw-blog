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
            <b>서비스 시장의 공백을 인식하고 이를 해결하기 위해 다양한 서비스를 기획하고 개발하는 데 집중하고 있습니다. </b>
            <br></br>
            <b>또한, 사용자의 다양한 행동 패턴을 분석하고 가정하며, 서비스의 빈틈을 찾아 이를 해결하는 것에 흥미를 느낍니다. </b>
            <p>무엇보다도, 제가 개발한 서비스가 출시되어 고객의 문제를 해결하는 순간에 큰 보람을 느낍니다. </p>
            <p>이러한 과정을 통해 고객의 니즈를 충족시키고 가치를 전달하며 더 좋은 서비스를 개발하며 성장하고 있습니다. </p>
          </span>
        </div>
      );
    }