export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const prefix = "/account";
  const NavigationItems = [
    { name: "Members", href: "/members" },
    { name: "Data Recovery", href: "/data-recovery" },
  ];

  return <div className="font-sans">{children}</div>;
}
