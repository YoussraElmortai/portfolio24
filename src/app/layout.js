import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Youssra Elmortai",
  description: "webdev portfolio",
  icons: {
    icon: "https://i.pinimg.com/736x/49/d2/2b/49d22b6227e7370c84d227f951d9c266.jpg", 
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
