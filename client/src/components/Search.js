import React, { Component } from "react";
import axios from "axios";
import Searched from "./Searched";

class Search extends Component {
  // Setting the initial values
  state = {
    topic: "",
    start_year: "",
    end_year: ""
  };

  // handle any changes to the input fields
  handleInputChange = event => {
    const { name, value } = event.target;
    // Set the state for the appropriate input field
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, prevent the default event
  handleFormSubmit = event => {
    event.preventDefault();

    // Form fields
    const topic = this.state.topic;
    let startYear = this.state.start_year;
    let endYear = this.state.end_year;

    // API Url
    const apiKey = "4ee6b80aa258404d942f5fe680b583e2";
    let queryURL = `http://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${apiKey}&q=${topic}`;

    // Appends month/day to startYear
    if (startYear) {
      startYear += "0101";
      queryURL = `${queryURL}&begin_date=${startYear}`;
    }

    // Appends month/day to endYear
    if (endYear) {
      endYear += "0101";
      queryURL = `${queryURL}&end_date=${endYear}`;
    }
    
    // console.log(queryURL);

    // API Get Request
    axios.get(queryURL)
    .then(function (nytimes) {
      console.log(nytimes.data.response.docs);
    })
    .catch(function (error) {
      console.log(error);
    });

    // Empty input fields
    this.setState({ topic: "", start_year: "" , end_year: "" });

  };

  render() {
    return (
      <div>
        <div className="card">
          <div className="card-content">
            <span className="card-title">Search for Articles</span>
              <div className="row">
                <form className="col s12">
                  <div className="row">
                    <div className="input-field col s12">
                      <input id="topic" name="topic" type="text" value={this.state.topic} onChange={this.handleInputChange} className="validate" />
                      <label htmlFor="topic">Topic</label>
                    </div>
                    <div className="input-field col s12">
                      <input id="start_year" name="start_year" type="text" value={this.state.start_year} onChange={this.handleInputChange} className="validate" />
                      <label htmlFor="start_year">Start Year</label>
                    </div>
                    <div className="input-field col s12">
                      <input id="end_year" name="end_year" type="text" value={this.state.end_year} onChange={this.handleInputChange} className="validate" />
                      <label htmlFor="end_year">End Year</label>
                    </div>
                  </div>
                  <button type="submit" className="waves-effect waves-light btn" onClick={this.handleFormSubmit}>Search</button>
                </form>
              </div>
          </div>
        </div>

        <Searched />
      </div>
    );
  }
}

export default Search;