import React from "react";
import { Link } from "react-router-dom";

const Article = props => (
  <li id={props.articleId} className="collection-item avatar">
    <i className="material-icons circle">format_align_left</i><span className="title">{props.articleTitle}</span> | <small>Date Published: {props.articleDate}</small>
    <p><Link to={props.articleUrl} className="black-text" target="_blank"><i className="material-icons tiny">call_made</i> View Article</Link></p>

    {props.saveArticle ?  <Link to="#" className="secondary-content" onClick={() => props.saveArticle(props.articleTitle, props.articleDate, props.articleUrl )} > <i className="material-icons">save</i>
      </Link> : null}

    {props.deleteArticle ?  <Link to="#" className="secondary-content" onClick={() => props.deleteArticle(props.articleId)} > <i className="material-icons">delete</i></Link> : null}
  </li>
);

export default Article;
