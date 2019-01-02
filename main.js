
document.addEventListener('DOMContentLoaded', function() {
    M.AutoInit();
  });


document.getElementById("select2").addEventListener("change",() =>{
    document.getElementById("resultado").innerHTML = " " 
   
     let tipo =document.getElementById("select2").value
   for (let i = 0; i < filterData(POKEMON.pokemon, tipo).length ; i++){
   
       document.getElementById("resultado").innerHTML += 
     

      
      `
         <div class="col s12 m5" style=" width: 298px;    height: 348px;">
          <div class="card">
              <div class="card-image blue accent-1">
              <div class="num" > ${filterData(POKEMON.pokemon, tipo)[i].num}</div>
              <span class="card-title"> ${filterData(POKEMON.pokemon, tipo)[i].name} </span> 
              <img src="${filterData(POKEMON.pokemon, tipo)[i].img}" alt="${filterData(POKEMON.pokemon, tipo)[i].img}" style= "width: 210px;">
            
          </div>
          <div class="card-action">
              <a class="waves-effect waves-light btn modal-trigger blue accent-1 " href="#modal1">Ficha pokemon</a> <!-- Modal Trigger -->
          </div>
        </div>
      </div>
      </span></div>
    `;



      
     
   }
   });




  


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



  


 

