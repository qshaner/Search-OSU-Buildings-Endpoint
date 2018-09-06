

export function filterResults(data, searchText, categories=[]) {
//Use the searchText to filter the data
if(!searchText) {
   return data;
}
searchText = searchText.toUpperCase();

//We will need to iterate through the data array
//Iterating will not cause problems, as we're going through
//the whole array anyways

let length = data.length;
let results = [];
let i = 0;

//console.log('Did the data make it?: ', data[0].zipCode)

while(i<length-1){
    //Broad cases, get it working, then go back for smaller
    //details (such as if the user typed 'a' or 'A' show
    // everything that would start with 'a'/'A')

let address = data[i].address
if(address) {
    address = address.toUpperCase().trim()
}

let buildingNumber = data[i].buildingNumber
if(buildingNumber){
    buildingNumber = buildingNumber.trim()
}

let name = data[i].name
if(name){
    name = name.toUpperCase().trim();
}

let zipcode = data[i].zipCode
if(zipcode){
    zipcode = zipcode.trim();
}

//Check against each one and if one works, add it 
//to the array

console.log(searchText);
searchText = searchText.toUpperCase().trim();

if (address===searchText.trim().toUpperCase()){
    results.push(data[i])
}
else if (buildingNumber===searchText.trim().toUpperCase()){
    results.push(data[i])
}
else if (name===searchText.trim().toUpperCase()){
    results.push(data[i])
}
else if (zipcode===searchText.trim().toUpperCase()){
    results.push(data[i])
}
else if (name&&name.includes(searchText)||
zipcode&&zipcode.includes(searchText)
|| address&&address.includes(searchText)||
buildingNumber&&buildingNumber.includes(searchText)){
    //partial matches
    results.push(data[i])
}
i++;
}
console.log('results: ', results)
//Success! This actually gets the result. Now to display it

return results;
}