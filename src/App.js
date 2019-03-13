import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import axios from "axios";

import Homepage from "./Components/Homepage/Homepage";
import Shows from "./Components/Shows/Shows";
import Movies from "./Components/Movies/Movies";
import List from "./Components/List/List";

import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

import "./Style.css";

export default class App extends Component {
  state = {
    randomSerie: []
  };

  componentDidMount() {
    this.fetchSeries();
  }

  async fetchSeries() {
    let randomSerie = await axios.get("shows/random");
    let getRandomSerie = randomSerie.data.shows;

    this.setState({
      randomSerie: getRandomSerie
    });

    // console.log(getRandomSerie);
  }

  render() {
    const header = this.state.randomSerie.map(serie => (
      <Header
        randomSerie={this.state.randomSerie}
        key={serie.id}
        id={serie.id}
        images={serie.images.show}
        title={serie.title}
        episodes={serie.episodes}
        seasons={serie.seasons}
      />
    ));

    return (
      <BrowserRouter>
        <div>
          <Navbar />
          {header}
          <Route exact path="/profile" component={List} />
          <Route exact path="/movies" component={Movies} />
          <Route exact path="/shows" component={Shows} />
          <Route exact path="/" component={Homepage} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}
