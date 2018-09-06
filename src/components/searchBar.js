import React, {Component} from 'react'
import propTypes from 'prop-types'
import { filterResults } from '../helpers/FilterResults'
import BuildingCard from './buildingCard';
import CardGrid from './cardGrid';

class SearchBar extends Component {
 constructor() {
     super();
     this.handleSearchTextChange = 
     this.handleSearchTextChange.bind(this);

    }
handleSearchTextChange(event) {
    this.props.onSearchTextChange(event.target.value);
}



    render() {
        //This is currently not actually filtering when clicking the submit button
        return(
          <div>
          <div className="button_container">
         <form>
           <input type="text" placeholder="Search..." name="search"
           onChange={this.handleSearchTextChange} value={this.props.searchText}
            style={{height: "20px", width: "200px"}}/>
           {//</form>/<button type="submit" onClick={//this.props.getResults(this.props.searchText)}>GO</button>
           }
         </form>
         </div>
          </div>
        )
      }
}

SearchBar.propTypes  = {
    data: propTypes.array,
    searchText: propTypes.string,
   // getResults: propTypes.function
}

//Map state to props? 
//I think it's something like const MapStateToProps = () => {prop: state} ? but I don't quite remember

export default SearchBar