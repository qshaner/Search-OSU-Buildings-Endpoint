import React, {Component} from 'react'
import propTypes from 'prop-types'
import { filterResults } from '../helpers/FilterResults';

//This is a component for users to select how to
//narrow down the initial list of buildings

//ie, they want a building with a lactation room
class FilterList extends Component {
 constructor() {
     super();

     this.state = {
        selectedDepartments: [],
        selectedCategories: []
      }
 }

 handleChange(event) {
    this.setState({selectedCategories: this.state.selectedCategories.push(event.target.value)})
    console.log("Selected Categories: ", this.state.selectedCategories)
    //Want to be able to select multiple categories. Right now there is an error with this
    //I think it has something to do with React itself?
    this.forceUpdate
    }
    

filter(){
//filterResults(,,this.state.selectedCategories)
}

render() {

    return (
<div style={listStyle}>
<button className="dropbtn" onClick={() => document.getElementById("dropdown").classList.toggle("Show")}>Filter Results?</button>
<div id="dropdown" style={dropDown}>
<form onChange={this.handleChange.bind(this)}> 
<input type="checkbox" name="categories"
value="Lactation Room"/>Lactation Room<br/>
<input type="checkbox" name="categories"
value="Recreation"/>Recreation<br/>
<input type="checkbox" name="categories"
value="Interest"/>Interest<br/>
<input type="checkbox" name="categories"
value="Computing"/>Computing<br/>
<input type="checkbox" name="categories"
value="Library"/>Library<br/>
<input type="checkbox" name="categories"
value="Wireless"/>Wireless<br/>
<input type="checkbox" name="categories"
value="Housing"/>Housing<br/>
<input type="checkbox" name="categories"
value="Medical"/>Medical<br/>
<input type="checkbox" name="categories"
value="Food"/>Food<br/>
<input type="checkbox" name="categories"
value="Parking"/>Parking<br/>
<hr></hr>
{// well, if there was more time, you could also categorize the 
    //various departments so that the user could filter based on department
    //However, looking at it, there are at least 100 different departments -- would need to 
    //not hard code this?
}
<button type="submit" onSubmit={this.filter}>Submit</button>
</form>
</div>
    </div>
    )
}
}

const listStyle = {
   position: 'relative',
   float: 'right',
    backgroundColor: '#F0F0F0',
    paddingRight: '20px',
    marginTop: '20px',
    display: 'inline-block'

}

const dropDown = {
    display: 'hide',
    position: 'absolute',
    backgroundColor: 'f6f6f6',
    overflow: 'auto',
    zIndex: '1', 

}

export default FilterList