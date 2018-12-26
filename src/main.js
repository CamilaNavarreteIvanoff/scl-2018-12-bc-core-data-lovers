//window.onload = () =>{

  const div_contenedor = document.getElementById("ordenado"); //imprime el listado ordenado
  
  
  document.getElementById("select1").addEventListener("change", () => {
    div_contenedor.innerHTML=""
  
   if (document.getElementById("select1").value === "a-z" || document.getElementById("select1").value === "z-a") {
    for (let i = 0; i < POKEMON.pokemon.length ;i++) {
   document.getElementById("ordenado").innerHTML += ` <img src="${pokego.sortData(POKEMON.pokemon, "name", document.getElementById("select1").value)[i].img}" alt="${pokego.sortData(POKEMON.pokemon, "name", document.getElementById("select1").value)[i].name}"> <br> ${pokego.sortData(POKEMON.pokemon, "name", document.getElementById("select1").value)[i].name} <br>`;
   } 

  }
  
  if (document.getElementById("select1").value === "1-151"){
    for (let i = 0; i < POKEMON.pokemon.length ;i++) {
   document.getElementById("ordenado").innerHTML += `${pokego.sortData(POKEMON.pokemon, "number", document.getElementById("select1").value)[i].id} <br>`;

        
}
  }});



  
 // document.write(div_contenedor)

 