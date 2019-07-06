import Layout from '../components/Layout.js'
import fetch from 'isomorphic-unfetch'

const Post = props => (
    <Layout>
        {props.episodes.map((episode) => (
            <li key={episode.id}>
                <h4>{episode.name}</h4>
                <p>{episode.summary.replace(/<[/]?p>/g, '')}</p>
                <img src={episode.image.medium} />
            </li>
        ))}
    </Layout>
)

Post.getInitialProps = async function(context) {
    const { id } = context.query
    const res = await fetch(`http://api.tvmaze.com/shows/${id}/episodes`)
    const episodes = await res.json()

    console.log(`Fetched shows count: ${episodes.length}`)

    return { episodes : episodes }
}

export default Post