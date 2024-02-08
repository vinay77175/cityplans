import * as React from "react";
import About_section from "./home/about_section";
import Plan_section from "./home/plan_section";
import Home_section from "./home/home_section";
import { Inter } from "@next/font/google";
import Contact_section from "./home/contact_section";
import Category_section from "./home/category_section";
const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  return (
    <div>
      <Home_section />
      <About_section />
      <Plan_section />
      {/* <Category_section /> */}
      <Contact_section />
    </div>
  );
}
