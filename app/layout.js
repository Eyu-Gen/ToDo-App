import { Josefin_Sans } from "next/font/google"; //Font imported from google font...
import "./globals.css";

//Creating font variable...
const josefinSans = Josefin_Sans({
  variable: "--font-Josefin-Sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "ToDo App - Yugin Paudel",
  description: "Organize your tasks effortlessly with our intuitive to-do website—plan, track, and achieve more every day!",
  openGraph: {
    images: [
      {
        url: "og-image.jpg", 
      }
    ]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefinSans.variable} antialiased bg-darkBlue`} //Implementing the font's varaible...
      >
        {children}
      </body>
    </html>
  );
}
