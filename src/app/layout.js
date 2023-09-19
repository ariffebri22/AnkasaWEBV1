import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    icon: "../../public/favicon.png",
    title: "Ankasa ",
    description: "Created by Arif Febriansyah",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
