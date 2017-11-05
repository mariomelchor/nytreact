import React, { Component } from "react";
import API from "../utils/API";
import Card from "./Card";
import Article from "./Article";

class Saved extends Component {
  // Setting the initial values
  state = {
    articles: [],
  };

  // Load Articles
  componentDidMount() {
    this.loadArticles();
  }

  // Load Saved Articles
  loadArticles = () => {
    API.getArticles()
    .then(res => this.setState({ articles: res.data }))
    .catch(err => console.log(err));
  };

  // displays search results
  savedArticles = () => {
    return (
      <ul className="collection">
        {this.state.articles.map(article => (
          <Article
            key={article._id} 
            articleId={article._id} 
            articleTitle={article.title} 
            articleDate={article.date}  
            articleUrl={article.url}
            deleteArticle={this.deleteArticle}
          />
        ))}
      </ul>
    )
  }

  // Deletes an Article
  deleteArticle = id => {
    API.deleteArticle(id)
    .then(res => this.loadArticles())
    .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        { this.state.articles.length ? <Card cardTitle="Saved Articles" cardContent={this.savedArticles()} /> : <Card cardTitle="No Saved Articles to Display" /> }
      </div>
    );
  }
}

export default Saved;