//BartenderDrinks 

function getDrinkByProfession(param){
    let string = param.toLowerCase()
    let cases = {
      "jabroni":"Patron Tequila",
      "school counselor":"Anything with Alcohol",
      "programmer":"Hipster Craft Beer",
      "bike gang member":"Moonshine",
      "politician":"Your tax dollars",
      "rapper":"Cristal"
    }
    if(cases[string]) {
        return cases[string]
    } else {
        return 'Beer'
    }
  }