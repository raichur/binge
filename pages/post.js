import Layout from "../components/Layout";
import fetch from "isomorphic-unfetch";
import React from "react";
import Collapsible from "react-collapsible";
import Head from "next/head";

class Post extends React.Component {
  static async getInitialProps(context) {
    const { id, title } = context.query;
    const episodesRes = await fetch(
      `https://api.tvmaze.com/shows/${id}/episodes`
    );
    const showRes = await fetch(`https://api.tvmaze.com/shows/${id}`);
    const showData = await showRes.json();
    const episodes = await episodesRes.json();

    var total_runtime_minutes = 0;
    var total_runtime = { days: 0, hours: 0, minutes: 0 };
    var total_seasons = 1;

    episodes.map(episode => {
      total_runtime_minutes += episode.runtime;
      if (episode.season > total_seasons) {
        total_seasons = total_seasons + 1;
      }
    });

    // Group episodes by season
    function groupBy(list, keyGetter) {
      const map = new Map();
      list.forEach(item => {
        const key = keyGetter(item);
        const collection = map.get(key);
        if (!collection) {
          map.set(key, [item]);
        } else {
          collection.push(item);
        }
      });
      return map;
    }

    const grouped_by_season = Array.from(
      groupBy(episodes, episode => episode.season)
    );

    // Convert minutes to hours
    if (total_runtime_minutes / 24 / 60 >= 1) {
      total_runtime.days = Math.floor(total_runtime_minutes / 24 / 60);
      if (total_runtime.days == 1) {
        total_runtime.days = String(total_runtime.days) + " day";
      } else if (total_runtime.days == 0) {
        total_runtime.days = "";
      } else {
        total_runtime.days = String(total_runtime.days) + " days";
      }
      total_runtime.hours = Math.floor((total_runtime_minutes / 60) % 24);
    } else {
      total_runtime.hours = Math.floor(total_runtime_minutes / 60);
    }
    if (total_runtime.hours == 1) {
      total_runtime.hours = String(total_runtime.hours) + " hour";
    } else if (total_runtime.hours == 0) {
      total_runtime.hours = "";
    } else {
      total_runtime.hours = String(total_runtime.hours) + " hours";
    }
    total_runtime.minutes = String(total_runtime_minutes % 60);

    var season_runtime = []
    var season_runtime_split = []

    grouped_by_season.map((item, index) => {
      season_runtime[index] = 0
      season_runtime_split[index] = {}
      season_runtime_split[index].hours = 0
      season_runtime_split[index].minutes = 0
      Array.from(item[1]).map((episode) => {
        season_runtime[index] = season_runtime[index] + episode.runtime;
      });
      season_runtime_split[index].hours = Math.floor(season_runtime[index] / 60)
      season_runtime_split[index].minutes = season_runtime[index] % 60
    });

    return {
      episodes,
      total_runtime,
      total_seasons,
      grouped_by_season,
      showName: showData.name,
      showImage: showData.image.original,
      season_runtime_split
    };
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout>
        <Head>
          <title>{this.props.showName} – BingeWatch</title>
        </Head>
        <div className="showContent">
          <div className="showItem">
            <div className="left">
              <h1 className="showTime">
                {this.props.total_runtime.days != ""
                  ? this.props.total_runtime.days
                  : null}{" "}
                {this.props.total_runtime.hours != ""
                  ? this.props.total_runtime.hours
                  : null}{" "}
                <br />
                {this.props.total_runtime.minutes != 0
                  ? this.props.total_runtime.minutes + " minutes"
                  : null}
              </h1>
              <h2 className="showTitle">
                {" "}
                to binge-watch {this.props.showName}
              </h2>
              <h2 className="seasons">
                {this.props.total_seasons} season
                {this.props.total_seasons > 1 ? "s" : ""}
              </h2>
            </div>
            <div className="right">
              <img src={this.props.showImage} />
            </div>
          </div>
          <Collapsible trigger="Seasons" triggerTagName="season-coll" transitionTime="200" >
            {this.props.grouped_by_season.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  <Collapsible  transitionTime="200" trigger={`Season ${index+1}: ${this.props.season_runtime_split[index].hours > 1 ? this.props.season_runtime_split[index].hours + " hours" : this.props.season_runtime_split[index].hours + " hour"}  ${this.props.season_runtime_split[index].minutes != 0 ? this.props.season_runtime_split[index].minutes + " minutes" : ""}`} key={index}>
                  {Array.from(item[1]).map(episode => {
                    return (
                        <li key={episode.id}>
                        <h4>
                          {episode.name}: <span>{episode.runtime} minutes</span>
                        </h4>
                      </li>
                      
                      );
                    })}
                    </Collapsible>
                </React.Fragment>
              );
            })}
          </Collapsible>
        </div>
      </Layout>
    );
  }
}

export default Post;
