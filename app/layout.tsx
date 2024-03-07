export const metadata = {
  title: 'jw-blog',
  description: 'jw blog',
  author: "jw",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
