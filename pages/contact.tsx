import Layout from "../app/components/Layout";
import styled from "styled-components";
import Link from "next/link";

const Title = styled.div`
    display: flex;
    flex-direction: row;

    a {
        margin-top: 38px;
        margin-left: 4px;
    }
`;

const Links = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`

const Contact = () => {
    return (
        <Layout>
            <Title>
                <h1>contact</h1>
                <Link href="/">back</Link>
            </Title>
            <Links>
                <Link href="mailto:aj@ajkneisl.dev">aj@ajkneisl.dev</Link>
                <Link href="https://github.com/shoganeko">github</Link>
            </Links>
        </Layout>
    );
};

export default Contact;
