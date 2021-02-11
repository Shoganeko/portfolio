import Head from "next/head";
import Main from "./Main";

type LayoutProps = {
    title?: string,
    children: JSX.Element[] | JSX.Element
}

const Layout = ({ title, children }: LayoutProps) => {
    return (
        <>
            <Head>
                <title>{title === undefined ? "AJ Kneisl" : title}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Main>
                {children}
            </Main>

            <footer></footer>
        </>
    );
};

export default Layout;