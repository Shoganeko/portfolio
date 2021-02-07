import { AppProps } from "next/dist/next-server/lib/router/router";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html, body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;

        background-color: #151416;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    p, h1, h2, h3 {
        color: white;
    }

    a {
        color: whitesmoke;
        text-decoration: underline;
    }

    * {
        box-sizing: border-box;
    }
`;

const Portfolio = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <GlobalStyle/>
            <Component {...pageProps} />;
        </>
    );
}

export default Portfolio;