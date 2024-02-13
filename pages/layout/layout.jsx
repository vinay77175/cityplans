import React from "react";
import { usePathname } from "next/navigation";
import Header from "../../component/header/header";
import Footer from "../../component/Footer/footer";
const layout = (props) => {
  const pathname = usePathname();

  return (
    <div>
      {/* {
      ((pathname !== "/" )|
      (pathname !== "/login") |
     ( pathname !== "/register") |
     ( pathname !== "/login/email_verify/verification" )|
      (pathname !== "/login/email_verify/reset_pwd") |
      (pathname !== "/login/email_verify")) && <Header />
      } */}
      {!(
        pathname == "/" ||
        pathname == "/login" ||
        pathname == "/register" ||
        pathname == "/login/email_verify/verification" ||
        pathname == "/login/email_verify/reset_pwd" ||
        pathname == "/login/email_verify"
      ) && <Header />}
      <main>{props.children}</main>
      {!(
        pathname == "/login" ||
        pathname == "/register" ||
        pathname == "/login/email_verify/verification" ||
        pathname == "/login/email_verify/reset_pwd" ||
        pathname == "/login/email_verify"
      ) && <Footer />}
    </div>
  );
};

export default layout;
