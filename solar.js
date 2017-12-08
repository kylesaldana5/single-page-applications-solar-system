var planetsArray = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]
let plantesDiv = document.getElementById("planets");

/*
 Use the forEach method to add the name of each planet
 to a div element in your HTML with an id of "planets".
*/

planetsArray.forEach( planet => {
    plantesDiv.innerHTML += `${planet} `;
});

// Use the map method to create a new array where the first letter of each planet is capitalized

 planetsCap = planetsArray.map(planet => 
     planet.charAt(0).toUpperCase() +planet.slice(1).toLowerCase()
);
console.log(planetsCap)

// Use the filter method to create a new array that contains planets with the letter 'e'
 plantsE = planetsArray.filter( planet => planet.indexOf("e") >= 0);
 console.log(plantsE)

// Use the reduce method to create a sentence from the words in the following array
 var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];
 
 let reduceIt = words.reduce( (name, names) =>
     name + " " + names 
 )
console.log(reduceIt)

