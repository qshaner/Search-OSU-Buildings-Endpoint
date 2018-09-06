import React, {Component} from 'react'
import './App.css'
import jsonData from './components/buildings'
import SearchBar from './components/searchBar';
import FilterList from './components/filterList';
import { filterResults } from './helpers/FilterResults';
import CardGrid from './components/cardGrid';


class App extends Component {
constructor() {
  super()
  this.state = {
    buildings: jsonData.data,
    searchText: ''
  }

  this.handleSearchTextChange = 
  this.handleSearchTextChange.bind(this);

}

/*
Here is the Problem and Psuedocode:
Problem: User searches something and gets a result or results for what they search

Pseudocode:
First, you need the data
You need the search criteria from the user
The data needs to be stripped to only relevant information
        (address, name, description, departments and categories)
After you have search criteria from user, you need to find the data packages that
fit the criteria
Somehow, you need to get the matched data back to the user
*/

/*
Ideally, you would have a search list and a filterable list with pictures and 
the names of the buildings
*/

componentDidMount() {
  console.log('Success!');
  //this.setState({buildings: jsonData});
this.populateArray();
  console.log('buildings: ', this.state.buildings);
  console.log('Specific building: ', this.state.buildings.buildings[0])
}


handleSearchTextChange(searchText) {
  this.setState({
    searchText: searchText})
  }

getResults(search) {
  console.info('search text: ',this.state.searchText)
  //SearchText is now tracked with user input, now we need
//to filter the results by the search criteria
let results = filterResults(this.populateArray(), this.state.searchText);
//This should set the state to the results of the filter
return results;
}

populateArray(){
  const length = jsonData.data.buildings.length;
  console.log('length: ', length)
  let dataAsArray= [];

  let i = 0;
while(i<length-1){
  dataAsArray.push(jsonData.data.buildings[i])
i++;
}
console.log('Array Data: ',dataAsArray)

return dataAsArray;
}

  render() {
    return(
      <div>
     <SearchBar searchText={this.state.searchText}
      data= {this.populateArray()}
      onSearchTextChange={this.handleSearchTextChange}> </SearchBar>
    {//Right now, the searchbar is not allowing the FilterResults function to run.
    //I'm not sure why this is happening, but essentially once you get the results from the search text,
    //You should be able to see the image, description, address, and name as thumbnails
    }
<CardGrid results={this.getResults()}></CardGrid>
{//HERE is the problem! GetResults relies on the state, so therefore, FilterResults also relies on state
//When you press 'GO' the page is listening to anychange and rerenders the whole component, thus making 
//it so that the searchText is blank again. Given that filterResults should only be called on submit,
//You never actually filter the results -> Search function doesn't work    
}
</div>
    )
  }
}


export default App