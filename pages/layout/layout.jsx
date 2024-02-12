import React from "react";
import { usePathname } from "next/navigation";
import Header from "../../component/header/header";
import Footer from "../../component/Footer/footer";
const layout = (props) => {
  const pathname = usePathname();

  return (
    <div>
      {pathname == "/" || pathname == "/login" || pathname == "/register" ? (
        ""
      ) : (
        <Header />
      )}
      <main>{props.children}</main>
      {pathname == "/login" || pathname == "/register" ? "" : <Footer />}
    </div>
  );
};

export default layout;
