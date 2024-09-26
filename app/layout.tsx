import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import Providers from "@/app/providers"

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
        <Providers>
          <div className="h-screen flex justify-center bg-gradient-to-br from-teal-300 to-cyan-600">
            <div className="flex flex-col">
              {/* title */}
              <h1 className="self-start ml-4 my-4 text-3xl font-semibold tracking-widest text-cyan-300">To Do List</h1>
              {/* main body */}
              {children}
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
