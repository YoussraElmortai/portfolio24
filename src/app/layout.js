import { Inter } from "next/font/google";
import Footer from "./components/footer/footer";
import "./globals.css";
import Header from "./components/header/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Youssra Elmortai",
  description: "dev portfolio",
  icons: {
    icon: "me.jpg", 
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        <main>
        {children}
        </main>
        <Footer />
        </body>
    </html>
  );
}
