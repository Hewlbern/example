import Head from "next/head";

import Navbar from "./Navbar";
import Footer from "./Footer";

const layoutStyle = {
  display: "flex",
  flexDirection: "column",
  height: "100%",
  width: "100%"
};

const Layout = props => (
  <div className="Layout" style={layoutStyle}>
    <Head>
      <title>Oracle</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </Head>
    <Navbar />
    <div>{props.children}</div>
   
      
    <Footer/>
  </div>
  
);

export default Layout;