import Layout from "../components/Layout.js";
import fetch from "isomorphic-unfetch";
import React from "react";

class Post extends React.Component {

  static async getInitialProps(context) {
    const { id, title } = context.query;
    const episodesRes = await fetch(`https://api.tvmaze.com/shows/${id}/episodes`);
    const showRes = await fetch(`https://api.tvmaze.com/shows/${id}`);
    const showData = await showRes.json();
    const episodes = await episodesRes.json();

    var total_runtime_minutes = 0;
    var total_runtime_hours = { hours: 0, minutes: 0 };
    var total_seasons = 1;

    episodes.map(episode => {
      total_runtime_minutes += episode.runtime;
      if (episode.season > total_seasons) {
        total_seasons = total_seasons + 1;
      }
    });

    // Convert minutes to hours
    total_runtime_hours.hours = Math.floor(total_runtime_minutes / 60);
    total_runtime_hours.minutes = total_runtime_minutes % 60;

    return { episodes, total_runtime_hours, total_seasons, showName: showData.name, showImage: showData.image.medium };
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout>
        <h1>{this.props.showName}</h1>
        <h2>
          {this.props.total_seasons} season
          {this.props.total_seasons > 1 ? "s" : ""}
        </h2>
        <img src={this.props.showImage} />
        <h2>
          {this.props.total_runtime_hours.hours} hours{" "}
          {this.props.total_runtime_hours.minutes} minutes
        </h2>

        {this.props.episodes.map(episode => {
          return (
            <li key={episode.id}>
              <h4>{episode.name}</h4>
              <p>{episode.runtime} minutes</p>
              <p>{episode.summary.replace(/<[/]?p>/g, "")}</p>
              <img src={episode.image.medium} />
            </li>
          );
        })}
      </Layout>
    );
  }
}

export default Post;
