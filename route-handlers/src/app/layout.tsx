import "./globals.css";

export const metadata = {
  title: "Route Handlers",
  description: "This is a route handlers project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
