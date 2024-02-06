import * as React from "react";
import About_section from "./home/about_section";
import Plan_section from "./home/plan_section";
import Home_section from "./home/home_section";
import { Inter } from "@next/font/google";
<<<<<<< Updated upstream
import Contact_section from "./home/contact_section";
=======
import Category_section from "./home/category_section";
>>>>>>> Stashed changes
const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  return (
    <div>
      <Home_section />
      <About_section />
      <Plan_section />
<<<<<<< Updated upstream
      <Contact_section/>
=======
      <Category_section />
>>>>>>> Stashed changes
    </div>
  );
}
