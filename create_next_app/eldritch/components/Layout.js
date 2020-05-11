import Head from "next/head";

import Narbar from "./Navbar";

const Layout = props => (
  <div className="Layout">
    <Head>
      <title>Oracle</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </Head>
    <Narbar />
    <div>{props.children}</div>
    <footer>
        <a
          href="https://zeit.co?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <img src="/zeit.svg" alt="ZEIT Logo" />
        </a>
      </footer>
      <style jsx>{`
        
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

     
      `}</style>
    
  </div>
);

export default Layout;