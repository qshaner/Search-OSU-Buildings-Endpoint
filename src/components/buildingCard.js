import React, {Component} from 'react'
import propTypes from 'prop-types'
//import CategoryPills from './CategoryPills';


class BuildingCard extends Component {


    render() {

        return (
            <div>
<div style={this.props.divStyle}> 
    <h3>{this.props.name}</h3>
   {// <CategoryPills categories={this.props.categories}></CategoryPills>
   }
    <img src={this.props.image} style={this.props.imgStyle}></img>
    <p>{this.props.address}, {this.props.zipcode}</p>
</div>
    </div>
        )
    }
}

BuildingCard.propTypes ={
    image: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    address: propTypes.string,
    zipcode: propTypes.string,
    categories: propTypes.array,
    divStyle: propTypes.object,
    imgStyle: propTypes.object
}

BuildingCard.defaultProps ={
divStyle: defaultDivStyle,
imgStyle: defaultImgStyle
}

const defaultDivStyle = {
    backgroundColor: '#dbfffc',
    height: '400px',
    width: '400px',
    //position: 'relative',
    margin: '20px',
    padding: '20px',
    textAlign: 'center'
}

const defaultImgStyle = {
    height: '80%',
    width: '80%',
    position: 'relative',
    backgroundColor: '#0645aa',
    height: '300px',
    width: '300px'
}



export default BuildingCard