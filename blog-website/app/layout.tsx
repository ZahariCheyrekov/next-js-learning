import Navbar from "./components/Navbar";
import MyProfilePic from "./components/MyProfilePic";
import "./globals.css";

export const metadata = {
  title: "Blog Website",
  description: "This is my blog website",
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
        <MyProfilePic />
        {children}
      </body>
    </html>
  );
}
