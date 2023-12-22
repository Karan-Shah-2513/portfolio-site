// import { Inter } from "next/font/google";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Karan Shah",
  description: "This is Karan Shah's personal website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
