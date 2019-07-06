import Layout from '../components/Layout.js'
import fetch from 'isomorphic-unfetch'
import React from 'react'

class Post extends React.Component {

    static async getInitialProps(context) {
        const { id } = context.query
        const res = await fetch(`http://api.tvmaze.com/shows/${id}/episodes`)
        const episodes = await res.json()
    
        console.log(`Fetched shows count: ${episodes.length}`)

        var total_runtime = 0

        episodes.map((episode) => {
            total_runtime += episode.runtime
        })

        return { episodes : episodes, total_runtime: total_runtime }
    }

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Layout>
                <h1>{this.props.total_runtime} minutes total</h1>
                {this.props.episodes.map((episode) => {
                    // this.setState(this.state.total_runtime, this.state.total_runtime + episode.runtime)
                    return (
                        <li key={episode.id}>
                            <h4>{episode.name}</h4>
                            <p>{episode.runtime} minutes</p>
                            <p>{episode.summary.replace(/<[/]?p>/g, '')}</p>
                            <img src={episode.image.medium} />
                        </li>
                    )
                })}
            </Layout>
        )
    }
}



export default Post