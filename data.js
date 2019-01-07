// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

window.pokego = {

  sortData: (data, sortBy, sortOrder) => {
    if (sortBy === "name" && sortOrder === "a-z"){
      data.sort((a,b) =>{
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        //a debe ser igual b
        return 0;
        
      } )
     return data;

    } 

    if (sortBy === "name" && sortOrder === "z-a"){
      data.sort((a,b) =>{
        if (a.name > b.name) {
          return -1;
        }
        if (a.name < b.name) {
          return 1;
        }
        //a debe ser igual b
        return 0;
        
      } )
     return data;

    } 

    if (sortBy === "number" && sortOrder === "1-151"){
      data.sort((a,b) =>{
        if (a.id < b.id) {
          return -1;
        }
        if (a.id > b.id) {
          return 1;
        }
        //a debe ser igual b
        return 0;
        
      } )
     return data;

    //  const numbers = [1, 2, 3, 4, 5];
    //  const newNumbers = numbers.reduce((elementoAnterior, elementoActual) => {
    //    console.log('Elemento anterior: ' + elementoAnterior)
    //    console.log('Elemento actual: ' + elementoActual)
    //    console.log('Suma de los elementos: ' + (elementoAnterior + elementoActual))
    //    return elementoAnterior + elementoActual
    //  })



  }
  
}

}
window.pokego2 = {
      filterData(data, condition)  {

      const tiposDePokemon = data.filter(tipos =>{
      return tipos.type.indexOf(condition) !== -1;
       })
       return tiposDePokemon;
      }
    }
    

    