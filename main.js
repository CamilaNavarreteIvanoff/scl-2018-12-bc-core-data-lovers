document.getElementById("select2").addEventListener("change",() =>{
    document.getElementById("contenedor").innerHTML = " " 
   
     let tipo =document.getElementById("select2").value
   for (let i = 0; i < filterData(POKEMON.pokemon , tipo).length ; i++){
   
       document.getElementById("contenedor").innerHTML += `${filterData(POKEMON.pokemon , tipo)[i].name}<br>`
   }
   });