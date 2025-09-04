export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header>Navbar</header>
        <aside>Sidebar</aside>
        <main>{children}</main>
      </body>
    </html>
  );
}
