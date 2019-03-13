import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import App from "./App";

axios.defaults.baseURL = "https://api.betaseries.com/";
axios.defaults.params = {};
axios.defaults.params["v"] = "3";
axios.defaults.params["key"] = "557c11338b26";
axios.defaults.params["id"] = "1117218";

ReactDOM.render(<App />, document.getElementById("root"));
