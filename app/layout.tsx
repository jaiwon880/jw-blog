import Footer from "@/components/Footer";
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
      <body>{children}</body>
      <Footer/>
    </html>
  );
}
