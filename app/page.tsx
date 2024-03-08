import "./../styles/globals.css";
import PageLayout from "@/components/PageLayout";
import HomeBanner from "@/components/Banner";
import RecentPosts from "@/components/RecentPosts";

export default async function HomePage() {
  return (
    <PageLayout>
      <HomeBanner />
      <RecentPosts />
    </PageLayout>
  );
}
