import React, {Component} from 'react'
import propTypes from 'prop-types'
import BuildingCard from './buildingCard';


class CardGrid extends Component {


    populateArray(){
        const length2 = this.props.endpointData.length;
        console.log('length2: ', length2);
        console.log("first element endpoint: ", this.props.endpointData[0])
         let i = 0;
         let endpointAsArray = [];
        while(i<length2){
        endpointAsArray.push(this.props.endpointData[i])
        i++;
        }
        
        console.log('Endpoint Array Data', endpointAsArray);
        
        return endpointAsArray;
        }
      

    getInfoAsCardArray() {
        let cardArray = []
      //  console.log("categories Card: ", this.props.results[4].categories[0].name)

if(this.props.results.length==1){
  // console.log("single card: ", this.props.results) 
 cardArray.push(<BuildingCard image={this.props.results[0].imageUrl} 
name={this.props.results[0].name} 
address={this.props.results[0].address}
zipcode={this.props.results[0].zipCode}
categories={this.props.results[0].categories}
divStyle={singleDivStyle}
imgStyle={singleImgStyle}
></BuildingCard>)
} else {
        this.props.results.forEach((item) =>{
          cardArray.push(
              <BuildingCard image={item.imageUrl} name={item.name} address={item.address}
               zipcode={item.zipCode} categories={item.categories}
                divStyle={defaultDivStyle} imgStyle={defaultImgStyle}></BuildingCard>
          )  
        })
    }
        return cardArray;
        }

        splitArray(cardArray) {
            let cardArrayHalf= [];

            let length = cardArray.length/2
                for(let i=0; i<length-1; i++){
                    cardArrayHalf.push(cardArray.pop())
                }

return cardArrayHalf
        }

render() {
    //Want it to be double column, currently is a single column

    let cardArray = this.getInfoAsCardArray();
let cardArrayHalf =this.splitArray(cardArray);

if(this.props.results.length==1){
    return (
<div style={row}>
    {cardArray}
</div>
    )
}
else {

   return (
       <div style={row}>
       <div style={column}>
          {cardArray}
       </div>
       <div style={column}>
       {cardArrayHalf}
       </div>
       </div>
   )
}
}

}

CardGrid.propTypes = {
    results: propTypes.array.isRequired,
    searchText: propTypes.string,
    endpointData: propTypes.array.isRequired
}

CardGrid.defaultProps = {
    //: this.populateArray(), 
}

const column = {
    flex: '50%'
}

const row = {
    display: 'flex'
}

const singleDivStyle = {
//flex: '100%',
width: '100%',
height: '100%',
padding: '50px',
margin:'50px',
textAlign: 'center'
}

const singleImgStyle = {
flex: '100%',
height: '90%',
width: '90%'
}

const defaultDivStyle = {
    backgroundColor: '#dbfffc',
    height: '500px',
    width: '500px',
    position: 'relative',
    margin: '50px',
    padding: '50px',
    textAlign: 'center'
}

const defaultImgStyle = {
    height: '80%',
    width: '80%',
    position: 'relative',
    backgroundColor: '#0645aa',
    height: '400px',
    width: '400px'
}

export default CardGrid