import Link from 'next/link'

export default function Header() {
    return (
        <div className="logo">
            <Link href="/">
                <img src="/static/bw.svg"/>
            </Link>
        </div>
    )
}