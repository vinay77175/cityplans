import React from "react";
import { usePathname } from "next/navigation";
import Header from "../../component/header/header";
import Footer from "../../component/Footer/footer";
const layout = (props) => {
  const pathname = usePathname();

  return (
    <div>
      {pathname !== "/" && <Header />}
      <main>{props.children}</main>
      <Footer />
    </div>
  );
};

export default layout;
