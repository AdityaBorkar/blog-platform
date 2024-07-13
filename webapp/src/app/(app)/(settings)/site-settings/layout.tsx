export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const prefix = "/site";
  const NavigationItems = [
    { name: "Schema Markup", href: "/schema-markup" },
    { name: "Sitemap", href: "/sitemap" },
    { name: "Robots", href: "/robots" },
    { name: "Socials", href: "/socials" },
  ];

  return <div className="font-sans">{children}</div>;
}
