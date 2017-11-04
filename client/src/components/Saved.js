import React, { Component } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import Card from "./Card";

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
    .then(res =>
      this.setState({ articles: res.data })
    )
    .catch(err => console.log(err));
  };

  // Deletes an Article
  deleteArticle = id => {
    API.deleteArticle(id)
    .then(res => this.loadArticles())
    .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        {this.state.articles.length ? (
          <div className="card">
            <div className="card-content">
            <span className="card-title">Saved Articles</span>
            <ul className="collection">
            {this.state.articles.map(article => (

              <li key={article._id} id={article._id} className="collection-item avatar">
                <i className="material-icons circle">format_align_left</i>
                <span className="title">{article.title}</span>
                <p><small>Date Published: {article.date}</small> <br /> 
                <Link to={article.url} className="black-text" target="_blank"><i className="material-icons tiny">call_made</i> View Article</Link>
                <Link to="#" className="secondary-content" onClick={() => this.deleteArticle(article._id)}><i className="material-icons">delete</i></Link></p>
              </li>

            ))}
            </ul>
            </div>
          </div>
        ) : (
          <Card cardTitle="No Saved Articles to Display" />
        )}
      </div>
    );
  }
}
export default Saved;