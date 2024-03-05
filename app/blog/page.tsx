import BlogPost from "@/components/BlogPost";
import Container from "@/components/Container";

export default function Blog() {
  return (
    <Container>
    <div className={`mt-10 flex flex-col`}>
        <BlogPost />
        <BlogPost />
        <BlogPost />
      </div>
  </Container>
  )
}
