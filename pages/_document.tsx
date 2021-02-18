import Document, {
    DocumentContext,
    Html,
    Head,
    Main,
    NextScript,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class PortfolioDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(<App {...props} />),
                });

            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            };
        } finally {
            sheet.seal();
        }
    }

    render() {
        return (
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap"
                        rel="stylesheet"
                    />
                    <link
                        rel="stylesheet"
                        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
                    />
                    <meta name="keywords" content="aj kneisl, ajkneisl" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
