document.addEventListener('DOMContentLoaded', function() {
    M.AutoInit();
  });



document.getElementById("select2").addEventListener("change",() =>{
    document.getElementById("contenedor").innerHTML = " " 
   
     let tipo =document.getElementById("select2").value
   for (let i = 0; i < filterData(POKEMON.pokemon, tipo).length ; i++){
   
       document.getElementById("contenedor").innerHTML += `<img src="${filterData(POKEMON.pokemon, tipo)[i].img}" alt="${filterData(POKEMON.pokemon, tipo)[i].img}>"${filterData(POKEMON.pokemon, tipo)[i].name}<br>`;
      
     
   }
   });

   

//    document.getElementById("contenedor").innerHTML +=
//     ` <img src="${filterData(POKEMON.pokemon, "name", document.getElementById("select2").value)[i].img}"   <br>`;


