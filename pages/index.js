import React from "react";
import Layout from "../components/Layout";
import Link from "next/link";
import fetch from "isomorphic-unfetch";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shows: [],
      value: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getShows = this.getShows.bind(this)
  }

  getShows() {
    fetch(`http://api.tvmaze.com/search/shows?q=${encodeURIComponent(this.state.value)}`)
    .then(results => {
      return results.json();
    })
    .then(data => {
      let shows = data.map(result => (
        <li key={result.show.id}>
          <Link
            as={`/p/${result.show.id}`}
            href={`/post?id=${result.show.id}`}
          >
            <a>{result.show.name}</a>
          </Link>
        </li>
      ));
      this.setState({ shows: shows })
    });
  }


  handleChange(event) {
    this.setState({ value: event.target.value }, () => {
        this.getShows()
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.getShows()
  }

  render() {
    return (
      <Layout>
        <form className="form" id="addItemForm" onSubmit={this.handleSubmit}>
          <input
            type="text"
            className="input"
            autoComplete="off"
            id="addInput"
            placeholder="Search for TV shows"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <button className="button is-info">Search</button>
        </form>
        {this.state.shows}
      </Layout>
    );
  }
}

export default Index;
