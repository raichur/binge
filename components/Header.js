import Link from 'next/link'
import ReactSVG from 'react-svg'
import Head from 'next/head'


export default function Header() {
    return (
        <>
        <Head>
        <link rel="shortcut icon" type="image/png" href="../static/favicon.png"/>
        </Head>
        <div className="logo">
            <Link href="/">
                <ReactSVG src="/static/bw.svg"/>
            </Link>
        </div>
        </>
    )
}