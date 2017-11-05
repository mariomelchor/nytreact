import React, { Component } from "react";
import axios from "axios";
import API from "../utils/API";
import Card from "./Card";
import SearchForm from "./SearchForm";
import Article from "./Article";

class Search extends Component {
  // Setting the initial values
  state = {
    articles: [],
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

  // displays search form
  searchForm = () => {
    return (
      <SearchForm 
        topic={this.state.topic} 
        startYear={this.state.start_year} 
        endYear={this.state.end_year} 
        handleInputChange={this.handleInputChange} 
        handleFormSubmit={this.handleFormSubmit}
      />
    )
  }

  // When the form is submitted, prevent the default event
  handleFormSubmit = event => {
    event.preventDefault();

    // Form fields
    const topic = this.state.topic;
    let startYear = this.state.start_year;
    let endYear = this.state.end_year;

    // API Url
    const apiKey = "4ee6b80aa258404d942f5fe680b583e2";
    let queryURL = `//api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${apiKey}&q=${topic}`;

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
    .then(nytimes => {
      // console.log(nytimes.data.response.docs);
      this.setState({ articles: nytimes.data.response.docs });
    })
    .catch(function (error) {
      console.log(error);
    });

  };

  // displays search results
  searchResults = () => {
    return (
      <ul className="collection">
        {this.state.articles.map(article => (
          <Article
            key={article._id} 
            articleId={article._id} 
            articleTitle={article.headline.main} 
            articleDate={article.pub_date}  
            articleUrl={article.web_url}
            saveArticle={this.saveArticle}
          />
        ))}
      </ul>
    )
  }

  // Save an Article
  saveArticle = (title, date, url) => {
    API.saveArticle({
      title: title,
      date: date,
      url: url,
      saved: true
    })
    .then(res => console.log(res))
    .catch(err => console.log(err))
  };

  render() {
    return (
      <div>
        <Card cardTitle="Search for Articles" cardContent={this.searchForm()} />
        { this.state.articles.length ? <Card cardTitle="Search Results" cardContent={this.searchResults()} /> : '' }
      </div>
    );
  }
}

export default Search;