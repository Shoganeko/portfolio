import { getAllDocs, getDocBySlug, markdownToHtml } from "../../app/util/Api"
import styled from "styled-components";
import Layout from "../../app/components/Layout";

const ChangelogContainer = styled.div`
    color: white;
`

const Changelog: React.FC<{ meta: any, content: string }> = ({ meta, content }) => {
    const { name, version, date } = meta

    return (
        <Layout>
            <h1>
                {name} ({version}) - {date}
            </h1>
            <ChangelogContainer dangerouslySetInnerHTML={{ __html: content }} />
        </Layout>
    );
}

export default Changelog

export async function getStaticProps({ params }) {
    const doc = getDocBySlug(params.slug);
    const content = await markdownToHtml(doc.content || "");

    return {
        props: {
            ...doc,
            content,
        },
    };
}

export async function getStaticPaths() {
    const docs = getAllDocs();

    return {
        paths: docs.map((doc) => {
            return {
                params: {
                    slug: doc.slug,
                },
            };
        }),
        fallback: false,
    };
}