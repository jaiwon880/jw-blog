import PageLayout from "@/components/PageLayout";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <PageLayout title="Joy Han" description="반갑습니다. 히히">
      {children}
    </PageLayout>
  );
}