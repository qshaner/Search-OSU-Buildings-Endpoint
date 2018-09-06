import React, {Component} from 'react'
import propTypes from 'prop-types'

const categoryColors = {
    parking: '#610061',
    food: '#c6926b',
    medical: '#f4c3d9',
    housing: '#b6ff90',
    wireless: '#6A5ACD',
    library: '#DA70D6',
    computing: '#90b6ff',
    interest: '#d990ff',
    recreation: '#44ffbf',
    lactation: '#e0f2f2'
}

class CategoryPills extends Component {
//So the original idea for this was to have small labeled ovals that would
//be on each card. Upon clicking them, you'd be able to see details on them and 
//you would be able to filter based on the categories present

//Alas, if I want to get this done, the pill idea will have to wait. 
    constructor() {
        super();
 let pills = [];
  if(this.props.categories != null){
   for(let i=0; i<this.props.categories.length-1; i++){
//make a pill with the correct color depending on tag present
let item = this.props.categories[i]
let name = item.name
if(name!=='Lactation Room'){
pills.push(
<div style={{backgroundColor: categoryColors.name }}>
<p>{item.name}</p>
</div>
) }
else {
    pills.push(
        <div style={{backgroundColor: categoryColors.lactation}}>
<p>Lactation</p>
</div>
    )
} 
    }
    //end for loop
 } 
    } 

    render() {
        return(
                <p> hi</p>
        ) 
    }

}

CategoryPills.propTypes ={
    categories: propTypes.array
}

export default CategoryPills