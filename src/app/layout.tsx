import type { Metadata } from "next";
import { Montserrat, Roboto } from "next/font/google";
import "./globals.css";

import Link from "next/link";

const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Irvin Martinez",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const links = [
    { href: "#projects", label: "Projects" },
    { href: "#about", label: "About" },
    { href: "#Contact", label: "Contact" },
  ];
  return (
    <html lang="en">
      <body className={`${roboto.className}`}>
        <header className="h-20vh bg-Primary flex justify-center items-center w-full">
          <nav className="w-5/6 h-full flex flex-col justify-evenly ">
            <div className="flex text-white justify-center items-center">
              <div >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="#159A9C"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
                  />
                </svg>
              </div>
              <h1 className="Mobile:text-2xl">Irvin Martinez</h1>
            </div>
            <ul className="flex flex-row justify-around items-center Mobile:text-lg h-1/3">
              {links.map((link, index) => {
                return (
                  <li key={index}>
                    <Link href={link.href} className="text-white">
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className=" flex justify-center h-1/3">
              <button className="bg-Orange hover:bg-altWhite hover:text-Orange text-white h-full w-1/3 rounded-lg">
                Resume
              </button>
            </div>
          </nav>
        </header>
        {/* <div className="bg-gradient-to-r from-Orange to-Secondary h-1 "></div> */}
        {children}
      </body>
    </html>
  );
}
