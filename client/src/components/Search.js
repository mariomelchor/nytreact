import React, { Component } from "react";
import axios from "axios";
import Searched from "./Searched";
import API from "../utils/API";

class Search extends Component {
  // Setting the initial values
  state = {
    articles: [],
    topic: "",
    start_year: "",
    end_year: ""
  };

  // Load Articles
  componentDidMount() {
    this.loadArticles();
  }

  loadArticles = () => {
    API.getArticles()
      .then(res =>
        this.setState({ articles: res.data, topic: "", start_year: "", end_year: "" })
      )
      .catch(err => console.log(err));
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

      // Save Book
      if ( nytimes.data.response.docs ) {

        nytimes.data.response.docs.map(article => (
          API.saveArticle({
            title: article.headline.main,
            url: article.web_url,
          })
          .then(res => this.loadArticles())
          .catch(err => console.log(err))
        ))
        
      }

    })
    .catch(function (error) {
      console.log(error);
    });

    // Empty input fields
    this.setState({ topic: "", start_year: "" , end_year: "" });
    this.loadArticles();

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

        {this.state.articles.length ? (
          <div className="card">
            <div className="card-content">
            <span className="card-title">Searched Articles</span>
            <ul className="collection">
            {this.state.articles.map(article => (

              <li key={article._id} id={article._id} className="collection-item avatar">
                <i className="material-icons circle">format_align_left</i>
                <span className="title">{article.title}</span>
                <p><small>Date Published: {article.date}</small> <br /> <a href="{article.url}" className="black-text" target="_blank"><i className="material-icons tiny">call_made</i> View Article</a></p>
                <a href="#!" className="secondary-content"><i className="material-icons">save</i></a>
                {article.url}
              </li>

            ))}
            </ul>
            </div>
          </div>
        ) : (
          <h3>No Articles to Display</h3>
        )}

      </div>
    );
  }
}

export default Search;