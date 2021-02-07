import styled from 'styled-components'
import Layout from '../components/Layout';

const Title = styled.h1`
    font-size: 64px;
    font-family: "Montserrat", sans-serif;
`;

const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    div {
        display: flex;
        justify-content: evenly;
    }
`

const Home = () => {
    return (
        <Layout>
            <TitleContainer>
                <div>
                    <Title>AJ Kneisl</Title>
                </div>
            </TitleContainer>
        </Layout>
    );
}

export default Home;
