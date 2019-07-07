import Link from 'next/link'

export default function Header() {
    return (
        <div className="logo">
            <Link href="/">
                <a>Binge</a>
            </Link>
        </div>
    )
}