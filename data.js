// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

const example = () => {
  return 'example';
};

window.example = example;

// const TiposDePokemon = pokemon.map(function(tipo){
//   return pokemon.tipo
// });
// window.pokemon.tipo ;

// console.log(TiposDePokemon);


//  const datos = POKEMON.pokemon;

//   let tiposDePokemon = POKEMON.pokemon.filter(function(tipos){
//           return tipos.type.indexOf("Grass", ) !== -1;});

//           console.log(tiposDePokemon)
          
 //return tiposDePokemon
 

 
 function filterData(data, condition)  {

  const tiposDePokemon = data.filter(tipos =>{
    return tipos.type.indexOf(condition) !== -1;

  })
  
  
    // console.log(tiposDePokemon);
    return tiposDePokemon
  };

// const imagenes =[]  
//  for (let i=0; i< data.lenght, i++){
//    imagen.push(data[i]["img"]);

//  };



//     let tiposDePokemon = POKEMON.pokemon.filter(function(tipos){
//        return tipos.type.indexOf.value !== -1;
    
// });