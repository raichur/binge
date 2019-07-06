import Layout from '../components/Layout.js'
import fetch from 'isomorphic-unfetch'
import React from 'react'

class Post extends React.Component {

    static async getInitialProps(context) {
        const { id } = context.query
        const res = await fetch(`http://api.tvmaze.com/shows/${id}/episodes`)
        const episodes = await res.json()
    
        console.log(`Fetched shows count: ${episodes.length}`)

        var total_runtime_minutes = 0
        var total_runtime_hours = { hours: 0, minutes: 0}

        episodes.map((episode) => {
            total_runtime_minutes += episode.runtime
        })

        total_runtime_hours.hours = Math.floor(total_runtime_minutes / 60)
        total_runtime_hours.minutes = total_runtime_minutes % 60

        return { episodes, total_runtime_hours }
    }

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Layout>
                <h1>{this.props.total_runtime_hours.hours} hours {this.props.total_runtime_hours.minutes} minutes total</h1>
                {this.props.episodes.map((episode) => {
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