import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Todo List | tryandbry",
  description: "A simple todo list application for tracking all of your tasks"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="h-screen flex justify-center bg-gradient-to-br from-teal-300 to-cyan-500">
          <div className="flex flex-col">
            {/* title */}
            <div className="self-start ml-4 my-4 text-5xl font-serif font-light text-cyan-400">Todo List</div>
            {/* main body */}
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
