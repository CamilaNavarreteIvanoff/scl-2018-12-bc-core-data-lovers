
document.addEventListener('DOMContentLoaded', function() {
    M.AutoInit();
  });


document.getElementById("select2").addEventListener("change",() =>{
    document.getElementById("contenedor").innerHTML = " " 
   
     let tipo =document.getElementById("select2").value
   for (let i = 0; i < filterData(POKEMON.pokemon, tipo).length ; i++){
   
       document.getElementById("contenedor").innerHTML += 
       `<div class="row">
         <div class="col s12 m6" style=" width: 298px;    height: 348px;">
           <div class="card ">
             <div class="card small" style=" width: 298px;    height: 348px;">
            <div class="card-panel  blue lighten-3" style="width: 298px;
            height: 348px;">
            <div class="num" > ${filterData(POKEMON.pokemon, tipo)[i].num}</div>
              <span class="card-title"> ${filterData(POKEMON.pokemon, tipo)[i].name} </span> 
              <a class="btn-floating halfway-fab waves-effect waves-light blue"><i class="material-icons">add</i></a> 
                 
            <div class="card-image">
              <img src="${filterData(POKEMON.pokemon, tipo)[i].img}" alt="${filterData(POKEMON.pokemon, tipo)[i].img}" style= "width: 210px;">
              
              
            </div>
           

            </div>
           </div>
           </div>
         </div>
       </div>
     </div>  `;
      
     
   }
   });

//    <div class="row">
//    <div class="col s12 m6">
//      <div class="card">
//        <div class="card-image">
//          <img src="images/sample-1.jpg">
//          <span class="card-title">Card Title</span>
//          <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
//        </div>
//        <div class="card-content">
//          <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
//        </div>
//      </div>
//    </div>
//  </div>


  


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



  


 

