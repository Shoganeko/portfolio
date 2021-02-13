import Link from "next/link";
import styled from "styled-components";
import Layout from "../app/components/Layout";
import Logo from "../app/components/Logo";

type ProjectArgs = {
    title: string;
    desc: string;
    links: JSX.Element[];
    icons: JSX.Element[] | JSX.Element;
};

const Project = ({ title, desc, links, icons }: ProjectArgs) => {
    const ProjectBody = styled.div`
        border-radius: 4px;
        position: relative;
        color: white;
        background-color: #1d1b1c;
        padding-left: 16px;
        padding-right: 16px;
        padding-bottom: 16px;
        min-height: 232px;

        max-width: 256px;

        p {
            margin-bottom: 32px;
        }

        .project-footer {
            position: absolute;
            bottom: 0;
            display: flex;
            flex-direction: row;
            width: 100%;
            justify-content: space-between;

            margin-bottom: 16px;
            width: 224px;

            .icons {
                display: flex;
                justify-content: space-evenly;
                flex-direction: row;
            }

            .links {
                display: flex;
                flex-direction: row;
                justify-content: space-evenly;
                list-decoration: none;
            }
        }
    `;

    return (
        <ProjectBody>
            <h1>{title}</h1>
            <p>{desc}</p>
            <div className="project-footer">
                <div className="icons">{icons}</div>
                <div className="links">
                    {links.map((link: JSX.Element, index: number) => {
                        return index + 1 === links.length ? (
                            <div key={index}>{link}</div>
                        ) : (
                            <div key={index}>{link} / </div>
                        );
                    })}
                </div>
            </div>
        </ProjectBody>
    );
};

const ProjectLists = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    max-width: 816px;
`;

const Title = styled.div`
    display: flex;
    flex-direction: row;

    a {
        margin-top: 38px;
        margin-left: 4px;
    }
`

const Portfolio = () => {
    return (
        <Layout>
            <Title>
                <h1>projects</h1>
                <Link href="/">back</Link>
            </Title>
            <ProjectLists>
                <Project
                    title="Unifey"
                    desc="An open-source social media platformed focused on privacy."
                    links={[
                        <a href="https://github.com/unifeyapp">GitHub</a>,
                        <a href="https://unifey.net">Unifey</a>,
                    ]}
                    icons={[<Logo name={"react"} />, <Logo name={"kotlin"} />]}
                />

                <Project
                    title="Buta"
                    desc="A bot for the chatting platform Discord. Provides a elegant user experience with it's integrated web panel."
                    links={[
                        <a href="https://github.com/shoganeko/buta">GitHub</a>,
                    ]}
                    icons={[<Logo name={"react"} />, <Logo name={"kotlin"} />]}
                />

                <Project
                    title="SpotKey"
                    desc="An open-source way to add short-cuts onto Spotify."
                    icons={[<Logo name={"kotlin"} />]}
                    links={[
                        <a href="https://github.com/shoganeko/spotkey">
                            GitHub
                        </a>,
                    ]}
                />

                <Project
                    title="Portfolio"
                    desc="This portfolio. Made in Next.js and hosted using Vercel."
                    icons={[<Logo name={"react"} />]}
                    links={[
                        <a href="https://github.com/shoganeko/portfolio">
                            GitHub
                        </a>,
                    ]}
                />
            </ProjectLists>
        </Layout>
    );
};

export default Portfolio;
