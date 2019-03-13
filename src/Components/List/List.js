import React, { Component } from "react";
import axios from "axios";

import Stats from "./Stats";
import AllTabs from "./AllTabs";

import "./ListImg.css";

export default class List extends Component {
  state = {
    series: [],
    movies: [],
    userInfos: [],
    userStats: []
  };

  componentDidMount() {
    document.title = "PreviouslyOn - Profile";

    this.favoriteSeries();
  }

  async favoriteSeries() {
    let favoriteSeries = await axios.get("members/infos");

    let getUserInfo = favoriteSeries.data.member;
    let getFavoriteMovies = favoriteSeries.data.member.movies;
    let getFavoriteSeries = favoriteSeries.data.member.shows;
    let getUserStats = favoriteSeries.data.member.stats;

    this.setState({
      userInfos: getUserInfo,
      series: getFavoriteSeries,
      movies: getFavoriteMovies,
      userStats: getUserStats
    });

    // console.log(getUserInfo);
    // console.log(getUserStats);
    // console.log(getFavoriteSeries);
    // console.log(getFavoriteMovies);
  }

  render() {
    const tabs1 = this.state.series.map(serie => (
      <tr key={serie.id}>
        <td>{serie.title}</td>
        <td>{serie.episodes}</td>
        <td>{serie.seasons}</td>
        <td className="mb-0">
          <a
            href="https://www.betaseries.com"
            className="betaseries-button"
            data-type="show-details"
            data-show={serie.title}
          >
            See more about this show on BetaSeries
          </a>
        </td>
      </tr>
    ));

    const tabs2 = this.state.movies.map(movie => (
      <tr key={movie.id}>
        <td>{movie.title}</td>
        <td>{movie.episodes}</td>
        <td>{movie.seasons}</td>
        <td className="mb-0">
          <a
            href="https://www.betamovies.com"
            className="betaseries-button"
            data-type="show-details"
            data-show={movie.title}
          >
            See more about this show on BetaSeries
          </a>
        </td>
      </tr>
    ));

    return (
      <div className="container mt-5">
        <div className="container">
          <div className="row mb-5">
            <Stats
              login={this.state.userInfos.login}
              avatar={this.state.userInfos.avatar}
              xp={this.state.userInfos.xp}
              friends={this.state.userStats.friends}
              comments={this.state.userStats.comments}
              badges={this.state.userStats.badges}
              shows={this.state.userStats.shows}
              movies={this.state.userStats.movies}
            />

            <div className="col-sm-9">
              <AllTabs />

              <div className="tab-content">
                <div className="tab-pane active" id="shows">
                  <table className="table mt-5  ">
                    <thead>
                      <tr>
                        <th scope="col">Shows followed</th>
                        <th scope="col">Episodes</th>
                        <th scope="col">Seasons</th>
                        <th scope="col">Shows Details</th>
                      </tr>
                    </thead>
                    <tbody>{tabs1}</tbody>
                  </table>
                </div>

                <div className="tab-pane" id="movies">
                  <div className="tab-pane active" id="shows">
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">Movies followed</th>
                        </tr>
                      </thead>
                      <tbody>{tabs2}</tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
