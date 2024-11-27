import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "./../styles/globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata = {
  title: "주저없이 도전하라",
  description: "겁이 많아도 겁없이 살게요",
  author: "joy",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className="max-w-screen-md min-w-[320px] mx-auto">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex flex-col" suppressHydrationWarning>
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
