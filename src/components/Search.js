import React from "react";

const Searched = () => (
  <div className="card">
    <div className="card-content">
      <span className="card-title">Search for Articles</span>
        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s12">
                <input id="topic" type="text" className="validate" />
                <label htmlFor="topic">Topic</label>
              </div>
              <div className="input-field col s12">
                <input id="start_year" type="text" className="validate" />
                <label htmlFor="start_year">Start Year</label>
              </div>
              <div className="input-field col s12">
                <input id="end_year" type="text" className="validate" />
                <label htmlFor="end_year">End Year</label>
              </div>
            </div>
            <button type="submit" className="waves-effect waves-light btn">Search</button>
          </form>
        </div>
    </div>
  </div>
);
export default Searched;