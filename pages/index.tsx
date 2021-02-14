import styled from 'styled-components'
import Layout from '../app/components/Layout';
import Link from "next/link"

const Title = styled.h1`
    font-size: 64px;
    font-family: "Montserrat", sans-serif;

    margin-bottom: -16px;
`;

const Navigation = styled.div`
    display: flex;
    justify-content: center;
    gap: 8px;
    margin-left: 12px;
`;

const Home = () => {
    return (
        <Layout>
            <Title>AJ Kneisl</Title>
            <p>react & kotlin developer</p>

            <Navigation>
                <Link href="/portfolio">portfolio</Link>
                <Link href="/contact">contact</Link>
            </Navigation>
        </Layout>
    );
}

export default Home;
