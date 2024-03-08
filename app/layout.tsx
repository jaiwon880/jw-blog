import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "./../styles/globals.css";

export const metadata = {
  title: "jw-blog",
  description: "jw blog",
  author: "jw",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className="max-w-screen-md min-w-[320px] mx-auto">
        <Header />
        <main className="flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
