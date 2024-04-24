import { Inter } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import { cookies } from "next/headers";
import { AppWrapper } from "@/context";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cendeki App | Interactive Learning Platform",
  description: "Interactive Learning Platform",
};

export default function RootLayout({ children }) {
  const findToken = async () => {
    const data = cookies().get("Authorization");
    if (!data) {
      return (
        <html lang="en">
          <body className={inter.className}>
            <div className="flex min-h-dvh">{children}</div>
          </body>
        </html>
      );
    } else {
    }
    let token = data.value.split(" ")[1];
    // console.log(token);
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
