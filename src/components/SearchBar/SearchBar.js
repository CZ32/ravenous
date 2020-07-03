import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
 constructor(props) {
  super(props);
  this.state = {
   term: '',
   location: '',
   sortBy: 'best_match',
  };
  this.sortByOptions = {
   'Best Match': 'best_match',
   'Highest Rated': 'rating',
   'Most Reviewed': 'review_count',
  };
 }
 renderSortByOptions() {
  return Object.keys(this.sortByOptions).map((sortByOption) => {
   const sortByOptionValue = sortByOptions[sortByOption];
   return <li key={sortByOptionValue}>{sortByOption}</li>;
  });
 }

 //Retruns current CSS for a sorting Option
 getSortedByClass(sortByOption){
    if(this.state.sortBy == sortByOption){
       return 'active';
    }else{
       return '';
    }
 }

 // Sets state of the sorting option
 handleSortByChange(sortByOption){
    this.setState({sortBy: sortByOption});
 }


 render() {
  return (
   <div className="SearchBar">
    <div className="SearchBar-sort-options">
     <ul>{this.renderSortByOptions()}</ul>
    </div>
    <div className="SearchBar-fields">
     <input placeholder="Search Businesses" />
     <input placeholder="Where?" />
    </div>
    <div className="SearchBar-submit">
     <a>Let's Go</a>
    </div>
   </div>
  );
 }
}

export default SearchBar;
