import Layout from '../components/Layout'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

const Index = props => (
    <Layout>
        <ul>
            {props.shows.map(show => (
                <li key={show.id}>
                    <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
                        <a>{show.name}</a>
                    </Link>
                </li>
            ))}
        </ul>
    </Layout>
)

Index.getInitialProps = async function() {
    const res = await fetch(`http://api.tvmaze.com/search/shows?q=mr+robot`)
    const data = await res.json()

    console.log(`Data fetched. Show count: ${data.length}`)

    return {
        shows: data.map(entry => entry.show)
    }
}

export default Index