//---To Note---
//1. All pre-built functions must return a new array
//2. You can make new functions as long as you want but do not change or update the pre-built ones
//3. You can udpdate the values inside the *newsList variable if you want but do not change the variable name
//4. Happy coding :)

//newsList is the variable that holds an array of strings
export var newsList = [
  "What films should an aspiring journalist watch?",
  "Buried underpants and tea bags help scientists evaluate soil",
  "Decoder: Mining asteroids for minerals can help spare Earth",
  "Media glare can enrich tennis pros yet imperil mental health",
  "'Nightmare' TV show 'Euphoria — health threat or high art?",
  "Decoder: Armenia in a bind as Ukraine war resets global order",
  "What books should an aspiring journalist read?",
  "Marie Colvin shined a light on war-torn corners of the world"
  //"I am a cool web developer" // array added during testing
];

export function search() {
  //inputValue is the variable that contains the search string
 const inputValue = document.getElementById("search-input").value;

  // change inputValue when doing test

//const inputValue = "web developer"; // use this input value during testing


  //Write your code here for the search function
  
  const searchString = inputValue;
  
  let matchingStrings = []; //create a new array
  
  newsList.forEach((list) => {
      if (list.toLocaleLowerCase().search(searchString.toLocaleLowerCase()) > -1) {
          matchingStrings.push(list) // push to the newly created array
      }
  })
  
  return matchingStrings; // use this return when doing the actual html searching
 // return matchingStrings.toString(); // convert the array into a string for testing
}

export function sort(type) {
  if (type == "ascending") {
    //Write your code here for sorting (ascending)
    newsList.sort();

  } else {
    //Write your code here for sorting (descending)
  }
    newsList.sort();
    newsList.reverse();

  return newsList;
}
