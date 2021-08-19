import React from "react";
import "./SearchBar.css";
import { SortByOptionsComponent } from "./SortByOptionsComponent";

const sortByOptions = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count",
};

class SearchBar extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      term: 'pizza',
      location: 'İstanbul',
      sortBy: 'best_match'
    }
    this.sortByOptions = sortByOptions;
    this.handleSortByChange = this.handleSortByChange.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange= this.handleLocationChange.bind(this);
    this.handleSearch= this.handleSearch.bind(this);

  }
  componentDidMount() {
      this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
  }
  handleTermChange(e){
    this.setState({
      term: e.target.value
    })
  }
  handleLocationChange(e){
    this.setState({
      location: e.target.value
    })
  }
  getSortByClass = (sortByOption) => {
    if (sortByOption === this.state.sortBy) {
     return 'active'; 
    }
    else{
      return '';
    }
  }

  handleSortByChange(sortByOption){
    this.setState({
      sortBy : sortByOption,
    })
  }
  handleSearch(e){
    this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
    e.preventDefault()
  }
  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
            <SortByOptionsComponent onClickGet={this.handleSortByChange} classNameGet={this.getSortByClass} sortByOptions={this.sortByOptions} />
        </div>
        <div className="SearchBar-fields">
          <input value={this.state.term} onChange={this.handleTermChange} placeholder="Search Businesses" />
          <input value={this.state.location} onChange={this.handleLocationChange} placeholder="Where?" />
        </div>
        <div className="SearchBar-submit">
          <a onClick={this.handleSearch}>Let's Go</a>

        </div>
      </div>
    );
  }
}

export default SearchBar;
