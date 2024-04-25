import { Inter } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import { cookies, headers } from "next/headers";
import { AppWrapper } from "@/context";
import Navbar from "@/components/Navbar";
import HeroFooter from "@/components/HeroFooter";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cendeki App | Interactive Learning Platform",
  description: "Interactive Learning Platform",
};

export default function RootLayout({ params, children }) {
  const headerList = headers();
  const url_1 = headerList?.headers.referer
    .split("/")
    .filter((segment) => segment !== "")[3];
  const url_2 = headerList?.headers.referer
    .split("/")
    .filter((segment) => segment !== "")[4];
    
  const findToken = async () => {
    const data = cookies().get("Authorization");
    if (!data) {
      return (
        <html lang="en">
          <body className={inter.className}>
            <Navbar />
            <div className="flex min-h-dvh">{children}</div>
            <HeroFooter />
          </body>
        </html>
      );
    } else {
    }
    let token = data.value.split(" ")[1];
    if (token) {
      return (
        <html lang="en">
          <body className={inter.className}>
            <div className="flex min-h-dvh">
              <AppWrapper>
                <Sidebar />
                {children}
              </AppWrapper>
            </div>
          </body>
        </html>
      );
    }
  };

  return <>{findToken()}</>;
}
