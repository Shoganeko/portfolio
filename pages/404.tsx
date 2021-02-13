import Link from "next/link"
import Layout from "../app/components/Layout";

const NotFound = () => {
    return (
        <Layout>
            <h1>That page could not be found.</h1>
            <Link href="/">back to safety.</Link>
        </Layout>
    );
}

export default NotFound;