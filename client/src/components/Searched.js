import React from "react";

var divStyle = {
  display: "none",
};

const Searched = () => (
  <div className="card" style={divStyle}>
    <div className="card-content">
      <span className="card-title">Searched Articles</span>
      <ul className="collection">
        <li className="collection-item avatar">
          <i className="material-icons circle">format_align_left</i>
          <span className="title">Article Title</span>
          <p><small>Date Published: </small> <br /> <a href="#" className="black-text" target="_blank"><i className="material-icons tiny">call_made</i> View Article</a></p>
          <a href="#!" className="secondary-content"><i className="material-icons">save</i></a>
        </li>
        <li className="collection-item avatar">
          <i className="material-icons circle">format_align_left</i>
          <span className="title">Article Title</span>
          <p><small>Date Published: </small> <br /> <a href="#" className="black-text" target="_blank"><i className="material-icons tiny">call_made</i> View Article</a></p>
         <a href="#!" className="secondary-content"><i className="material-icons">save</i></a>
        </li>
        <li className="collection-item avatar">
          <i className="material-icons circle">format_align_left</i>
          <span className="title">Article Title</span>
          <p><small>Date Published: </small> <br /> <a href="#" className="black-text" target="_blank"><i className="material-icons tiny">call_made</i> View Article</a></p>
          <a href="#!" className="secondary-content"><i className="material-icons">save</i></a>
        </li>
        <li className="collection-item avatar">
          <i className="material-icons circle">format_align_left</i>
          <span className="title">Article Title</span>
          <p><small>Date Published: </small> <br /> <a href="#" className="black-text" target="_blank"><i className="material-icons tiny">call_made</i> View Article</a></p>
          <a href="#!" className="secondary-content"><i className="material-icons">save</i></a>
        </li>
      </ul>
    </div>
  </div>
);
export default Searched;