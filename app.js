//const { padStart } = require("lodash");

function convert(valNum) {
  var z = document.forms["myForm"]["num"].value;
  console.log("check: " + z)
  if(/\D/.test(z)) {
    alert("Enter number please!");
    } else {
      document.getElementById("outputGrams").innerHTML = Math.round(valNum/ 0.0022046, 0);
      document.getElementById("outputGramsChild").innerHTML = Math.round(valNum/ 0.0022046, 0);
      console.log("check:" + valNum)
      document.getElementById("outputOz").innerHTML = Math.round(valNum * 35.274, 0);
      document.getElementById("outputLbs").innerHTML = Math.round(valNum * 2.20462, 0);
    };
 }

const displayTime = () =>{
  let date = new Date;
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  let amPm = '';

  if(hour < 12) {
    amPm = 'AM'
  } else {
    amPM = 'PM';
    hour = hour - 12;
  }

  let padHour = String(hour).padStart(2,0)
  let padMinute = String(minute).padStart(2,0)
  let padSecond = String(second).padStart(2,0)
  
  time.textContent = `${hour}:${padMinute}:${padSecond} ${amPM}`;
  //requestAnimationFrame(displayTime);
  
}

displayTime();


class Person {

constructor(firstName, lastName) {
  this.firstName = firstName,
  this.lastName = lastName
  };  
   change() {
    return this.firstName + " " + this.lastName
   }
  
};

var name1 = new Person("Tomson", "Kan")
var name2 = new Person("Preston", "Kan")

document.getElementById("Load").addEventListener('click', function(){
  document.getElementById("out1").innerHTML = name1.change()
})

// function change(newPerson) {
//   let array = [];

//   let newPerson = new Person("John", "Doe");
//   array.push(newPerson);
//   console.log("check" + array)
  
//  }



//  fetch('https://apidojo-yahoo-finance-v1.p.rapidapi.com/auto-complete', {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': 'a3c6baf1bemshb6b731f7d8a6f9cp10b2e7jsn6e8e45a8261d',
//       'X-RapidAPI-Host': 'apidojo-yahoo-finance-v1.p.rapidapi.com',
//     },
//   })
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.log(err));

    // const options = {
    //   method: 'GET',
    //   headers: {
    //     'X-RapidAPI-Key': 'a3c6baf1bemshb6b731f7d8a6f9cp10b2e7jsn6e8e45a8261d',
    //     'X-RapidAPI-Host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
    //   }
    // };
    
    // fetch('https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/v2/get-quotes?region=US&symbols=AMD%2CIBM%2CAAPL', options)
    //   .then(response => response.json())
    //   .then(response => console.log(response))
    //   .catch(err => console.error(err));

    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'a3c6baf1bemshb6b731f7d8a6f9cp10b2e7jsn6e8e45a8261d',
        'X-RapidAPI-Host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
      }
    };
    
    fetch('https://apidojo-yahoo-finance-v1.p.rapidapi.com/auto-complete?q=tesla&region=US', options)
      .then(response => response.json())
      .then(response => console.log(response))
      // .then((response) => {
      //   if (response.ok) {
      //     return response.json();
      //   } else {
      //     throw new Error("NETWORK RESPONSE ERROR");
      //   }
      // })
      .then(data => {
        console.log(data);
        displayYahoo(data)
      })
      .catch((error) => console.error("FETCH ERROR:", error));

      function displayYahoo(data) {
          const cocktail = data.explains[0];
            console.log('check' + cocktail)
          const cocktailDiv = document.getElementById("cocktail");
          const cocktailImg = document.createElement("img");
          cocktailImg.src = cocktail.shortname;
          //cocktailDiv.appendChild(cocktailImg);
          document.body.style.backgroundImage = "url('" + cocktail.shortname + "')";  
          const cocktailIngredients = document.createElement("ul");
          cocktailDiv.appendChild(cocktailIngredients);  
            console.log('check' + cocktail.shortname)
        const getIngredients = Object.keys(cocktail)
          .filter(function (ingredient) {
            return ingredient.indexOf("shortname") == 0;
          })
          .reduce(function (ingredients, ingredient) {
            if (cocktail[ingredient] != null) {
              ingredients[ingredient] = cocktail[ingredient];
            }
            return ingredients;
          }, {});

        for (let key in getIngredients) {
          let value = getIngredients[key];
          listItem = document.createElement("li");
          listItem.innerHTML = value;
          cocktailIngredients.appendChild(listItem);
        }
      }  


  displayYahoo();
//       fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
//   .then((response) => {
//     if (response.ok) {
//       return response.json();
//     } else {
//       throw new Error("NETWORK RESPONSE ERROR");
//     }
//   })
//   .then(data => {
//     console.log(data);
//     displayCocktail(data)
//   })
//   .catch((error) => console.error("FETCH ERROR:", error));

  
//   function displayCocktail(data) {
//     const cocktail = data.drinks[0];
//     const cocktailDiv = document.getElementById("cocktail");
//     const cocktailImg = document.createElement("img");
//     cocktailImg.src = cocktail.strDrinkThumb;
//     cocktailDiv.appendChild(cocktailImg);
//     document.body.style.backgroundImage = "url('" + cocktail.strDrinkThumb + "')";  
//     const cocktailIngredients = document.createElement("ul");
//   cocktailDiv.appendChild(cocktailIngredients);  
  
//   const getIngredients = Object.keys(cocktail)
//     .filter(function (ingredient) {
//       return ingredient.indexOf("strIngredient") == 0;
//     })
//     .reduce(function (ingredients, ingredient) {
//       if (cocktail[ingredient] != null) {
//         ingredients[ingredient] = cocktail[ingredient];
//       }
//       return ingredients;
//     }, {});

//   for (let key in getIngredients) {
//     let value = getIngredients[key];
//     listItem = document.createElement("li");
//     listItem.innerHTML = value;
//     cocktailIngredients.appendChild(listItem);
//   }
// }

