import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Next Todos",
  description: "Created for training",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
