import React, { Component } from "react";
import axios from "axios";

import PopularSeries from "./PopularSeries";

import "./HomepageStyle.css";

export default class Homepage extends Component {
  state = {
    topSeries: []
  };

  componentDidMount() {
    document.title = "PreviouslyOn - Homepage";

    this.fetchTopSeries();
  }

  async fetchTopSeries() {
    let topSeries = await axios.get("/shows/list?order=popularity&limit=10");
    let getTopSeries = topSeries.data.shows;
    this.setState({
      topSeries: getTopSeries
    });

    // console.log(getTopSeries);
  }

  render() {
    const popularSeries = this.state.topSeries.map(function(topSerie) {
      return (
        <PopularSeries
          key={topSerie.id}
          id={topSerie.id}
          title={topSerie.title}
          description={topSerie.description}
          images={topSerie.images.box}
        />
      );
    });

    return (
      <div>
        <div className="container">
          <div className="card-header text-center mt-5">Most popular shows</div>
          <div className="row no-gutters mb-5">{popularSeries}</div>
        </div>
      </div>
    );
  }
}
