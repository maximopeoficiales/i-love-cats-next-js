import Head from "next/head"

interface MyProps {
    children: React.ReactNode;
    title?: string
}
const PageLayout = ({ children, title = "I love Cats" }: MyProps) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content="The best cat app in the world" />
                <link rel="icon" href="/cat.ico" />
            </Head>
            <main>
                {children}
            </main>
        </>
    )
}

export default PageLayout