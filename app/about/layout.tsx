import PageLayout from "@/components/PageLayout";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <PageLayout title="Joy Han" description="Backend Developer">
      {children}
    </PageLayout>
  );
}