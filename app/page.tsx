import "./../styles/globals.css";
import PageLayout from "@/components/PageLayout";
import HomeBanner from "@/components/Banner";
import RecentPosts from "@/components/RecentPosts";
import Container from "@/components/Container";

export default async function HomePage() {
  return (
    <Container>
      <PageLayout>
        <HomeBanner />
        <RecentPosts />
      </PageLayout>
    </Container>
  );
}
