import { Inter } from "next/font/google";
import Sidebar from "@/components/Sidebar";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cendeki App | Interactive Learning Platform",
  description: "Interactive Learning Platform",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-dvh">
          <Sidebar />
          {children}
        </div>
      </body>
    </html>
  );
}
