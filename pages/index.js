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
    var parser = new DOMParser();
    fetch(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(this.state.value)}`)
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
            <div className="searchItem">
            <div className="left">
            {result.show.image ? <img className="searchImage" src={result.show.image.medium} /> : <img className="searchImage" src="/static/noimage.jpg" />}
            </div>
              <div className="right">
              <h3>{result.show.name}</h3>
              {result.show.summary ? <p className="summary" dangerouslySetInnerHTML={{__html: result.show.summary}} /> : null}
              </div>
            </div>
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
        <label htmlFor="inp" className="inp">
        <input
            type="text"
            className="inp"
            autoComplete="off"
            id="inp"
            placeholder="&nbsp;"
            value={this.state.value}
            autoFocus={true}
            onChange={this.handleChange}
          />
        <span className="label">Search for TV shows</span>
        <span className="border"></span>
        </label>
        </form>
        <div className="content">
        {this.state.shows}
        </div>
      </Layout>
    );
  }
}

export default Index;
