/*==========================================| Pokemon List Story Point 160 |==========================================*/ 

/*==========================================| Step One - Get the Data |==========================================*/ 

// const pokemonList = axios.get('https://api.vschool.io/pokemon/')
// .then(response => {
//   return response.data.objects[0].pokemon 
// })
// .catch(error => {
//   console.error('Error fetching data:', error);
// });
// console.log(pokemonList);

/*==========================================| Step Two - Display the Data |==========================================*/ 

const pokemonList = axios.get('https://api.vschool.io/pokemon/')
  .then(response => {
    let pokemonArray = response.data.objects[0].pokemon
    for (let i = 0; i < pokemonArray.length; i++) {
      const h1 = document.createElement('h1');
      h1.textContent = pokemonArray[i].name

      document.body.appendChild(h1)
    }
    // console.log(pokemonArray)
  })
  .catch(error => console.log(error))









