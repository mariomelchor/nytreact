import React from "react";

const SearchForm = props => (
  <form>
    <div className="row">
      <div className="input-field col s12">
        <input id="topic" name="topic" type="text" value={props.topic} onChange={props.handleInputChange} className="validate" />
        <label htmlFor="topic">Topic</label>
      </div>
      <div className="input-field col s12">
        <input id="start_year" name="start_year" type="text" value={props.startYear} onChange={props.handleInputChange} className="validate" />
        <label htmlFor="start_year">Start Year</label>
      </div>
      <div className="input-field col s12">
        <input id="end_year" name="end_year" type="text" value={props.endYear} onChange={props.handleInputChange} className="validate" />
        <label htmlFor="end_year">End Year</label>
      </div>
    </div>
    <button type="submit" className="waves-effect waves-light btn" onClick={props.handleFormSubmit}>Search</button>
  </form>
)

export default SearchForm;    


