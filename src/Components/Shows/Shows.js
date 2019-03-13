import React, { Component } from "react";
import axios from "axios";

import "./ShowsStyle.css";

export default class Series extends Component {
  state = {
    series: []
  };

  componentDidMount() {
    document.title = "PreviouslyOn - Shows";
    this.fetchSeries();
  }

  async fetchSeries() {
    let allSeries = await axios.get("shows/list?order=popularity&limit=20");
    let getSeries = allSeries.data.shows;

    this.setState({
      series: getSeries
    });

    console.log(getSeries);
  }

  render() {
    const betaSeriesBtn = (
      <p className="d-none">
        <a
          href="https://www.betaseries.com"
          className="betaseries-button"
          data-type="show-details"
          data-show="charmed"
        >
          See more about this show on BetaSeries
        </a>
      </p>
    );

    const showSeries = this.state.series.map(function(serie) {
      const betaSeriesBtn = (
        <div>
          <p className="mb-0">
            <a
              href="https://www.betaseries.com"
              className="betaseries-button"
              data-type="show-details"
              data-show={serie.title}
            >
              See more about this show on BetaSeries
            </a>
          </p>

          <p className="mb-0">
            <a
              href="https://www.betaseries.com"
              className="betaseries-button"
              data-type="show"
              data-show={serie.title}
            >
              Add the show on BetaSeries
            </a>
          </p>
        </div>
      );

      return (
        <div key={serie.id} className="card col-lg-3">
          <div className="card text-white text-center">
            <div className="card-header textLimit" title={serie.title}>
              {serie.title}
            </div>

            <img
              className="img-fluid testImg"
              src={serie.images.show}
              title={serie.description}
              alt=""
            />

            {betaSeriesBtn}
          </div>
        </div>
      );
    });

    return (
      <div className="container">
        {betaSeriesBtn}
        <div className="text-center row no-gutters mt-5 mb-5">{showSeries}</div>
      </div>
    );
  }
}
