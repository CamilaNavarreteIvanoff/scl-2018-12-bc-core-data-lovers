document.addEventListener('DOMContentLoaded', function() {
  window.M.AutoInit();
});

//aqui va la interacción del boton GO



//INTERACCION BOTON GO
document.getElementById("go").addEventListener("click", (evento) =>{
  evento.preventDefault();
  
  document.getElementById("portada").style.display="none";
  document.getElementById("information").style.display="block"; })
  //aqui debe aparecer la pagina de la información de los pokemones

  const containerRoot = document.getElementById("root");
  const showData = (POKEMON.pokemon)                      //1. crear una constante para ver la data
    console.log(showData)


document.addEventListener('DOMContentLoaded', function() {
    window.M.AutoInit();
  });
  
  // interaccion del boton filtrar por tipo

document.getElementById("select2").addEventListener("change",() =>{
    document.getElementById("resultado").innerHTML = " " 
      
     let tipo =document.getElementById("select2").value
      for (let i = 0; i <window.pokego2.filterData(window.POKEMON.pokemon, tipo).length ; i++){   

       document.getElementById("resultado").innerHTML += ` 
       <div class="col s12 m4">
       <h4 class="header"><b># ${window.pokego2.filterData(window.POKEMON.pokemon, tipo)[i].num}</b></h4>
       <div class="card horizontal">
         <div class="card-image">
           <img src="${window.pokego2.filterData(window.POKEMON.pokemon, tipo)[i].img}">
         </div>
         <div class="card-stacked">
           <div class="card-content">
             <h5><b>${window.pokego2.filterData(window.POKEMON.pokemon, tipo)[i].name}</b></h5>
           </div>
           <div class="card-action">
               <button class="ficha waves-effect waves btn modal-trigger  " href="#modal1" >Ficha pokemon</button>
           </div>
         </div>
       </div>
     </div>
         `;
  

     
   }
   abrirFicha(window.pokego2.filterData(window.POKEMON.pokemon, tipo)); 
   });






//interacción del boton ordenar

const div_contenedor = document.getElementById("ordenado"); //imprime el listado ordenado

  document.getElementById("select1").addEventListener("change", () => {
      div_contenedor.innerHTML=""

      if (document.getElementById("select1").value === "a-z" || document.getElementById("select1").value === "z-a") {
        for (let i = 0; i < POKEMON.pokemon.length ;i++) {
     
        document.getElementById("ordenado").innerHTML +=` 
        <div class="col s12 m4">
        <h4 class="header">#${pokego.sortData(window.POKEMON.pokemon, "name", document.getElementById("select1").value)[i].num}</h4>
        <div class="card horizontal">
          <div class="card-image">
            <img src="${window.pokego.sortData(window.POKEMON.pokemon, "name", document.getElementById("select1").value)[i].img}" alt="${pokego.sortData(window.POKEMON.pokemon, "name", document.getElementById("select1").value)[i].img}">
          </div>
          <div class="card-stacked">
            <div class="card-content">
              <p> ${pokego.sortData(window.POKEMON.pokemon, "name", document.getElementById("select1").value)[i].name}</p>
            </div>
            <div class="card-action">
                <button class="ficha waves-effect waves btn modal-trigger  " href="#modal1" >Ficha pokemon</button>
            </div>
          </div>
        </div>
      </div>        
     `    
     ;}
     abrirFicha(pokego.sortData(window.POKEMON.pokemon, "name", document.getElementById("select1").value)); 
     }     

    if (document.getElementById("select1").value === "1-151"){
    for (let i = 0; i < window.POKEMON.pokemon.length ;i++) {
    document.getElementById("ordenado").innerHTML += `
    <div class="col s12 m4">
        <h4 class="header">#${pokego.sortData(window.POKEMON.pokemon, "number", document.getElementById("select1").value)[i].num}</h4>
        <div class="card horizontal">
          <div class="card-image">
            <img src="${window.pokego.sortData(window.POKEMON.pokemon, "number", document.getElementById("select1").value)[i].img}" alt="${pokego.sortData(window.POKEMON.pokemon, "number", document.getElementById("select1").value)[i].img}">
          </div>
          <div class="card-stacked">
            <div class="card-content">
              <p> ${pokego.sortData(window.POKEMON.pokemon, "number", document.getElementById("select1").value)[i].name}</p>
            </div>
            <div class="card-action">
                <button class="ficha waves-effect waves btn modal-trigger "href="#modal1" >Ficha pokemon</button>
            </div>
          </div>
        </div>
      </div>  `      
    
          
    }

    }});

  
     



          
//aquí va la interaccion de las fichas por pokemon

         let fichaPokemon =  document.getElementsByClassName("ficha");
          function abrirFicha(data){
            for (let i=0; i < fichaPokemon.length; i++){
              fichaPokemon[i].addEventListener("click",()=>{
                document.getElementById("probandomodal").innerHTML =`
                <div id="modal1" class="modal">   
                <div class="row">
                 <div class="col s12 m7 l4">
                  <div class="modal-content">
                    <h4 class ="icon"><b>${data[i].name}</b></h4>
                    <br>
                     <div class="height"><b>Altura:</b>${data[i].height}</div>
                      <div class="weight"><b>Peso:</b>${data[i].weight}</div>
                       <div class="candy_count"><b>Conteo de dulces:</b>${data[i].candy_count}</div>
                       <div class="egg"><b>Huevo:</b>${data[i].egg}</div>
                       <div class="spawn_chance"><b>Probabilidad encontrarlo:</b>${data[i].spawn_chance}</div>
                       

                   </div>
                  </div>
                  
                  <div class="col s12 m7 l4">
                  <br>
                  <br>
                  <hr/>
                   <h5 class="nameType"><b>Tipo</b></h5>        
                     <p class="type  ${data[i].type[0]}">${data[i].type[0]}</p>
                      <p class="type ${data[i].type[1]}">${data[i].type[1]}</p>
                     <h5 class="nameWeaknesses"><b>Debilidades</b></h5>
                   <h6 class="weaknesses  ${data[i].weaknesses[0]}">${data[i].weaknesses[0]}</h6>  
                   <h6 class="weaknesses  ${data[i].weaknesses[1]}">${data[i].weaknesses[1]}</h6> 
                   <h6 class="weaknesses  ${data[i].weaknesses[2]}">${data[i].weaknesses[2]}</h6>
                   <h6 class="weaknesses  ${data[i].weaknesses[3]}">${data[i].weaknesses[3]}</h6> 
                   <h6 class="weaknesses  ${data[i].weaknesses[4]}">${data[i].weaknesses[4]}</h6>
                   <h6 class="weaknesses  ${data[i].weaknesses[5]}">${data[i].weaknesses[5]}</h6>
                   </div>

                  <div class="col s12 m7 l4">
                     <div class="responsive-image">
                       <img src="${data[i].img}">                                          
                        </div>
                        <div class="tooltip">?
                        <span class="tooltiptext">
                        Conteo de dulces:cantidad para evolucionar
                        Huevo:cantidad de km a recorrer
                        Probabilidad encontrarlo:0.69</span>
                      </div>           
                  </div>
                 
              
                  <div class="modal-footer">
                    <a href="#!" class="modal-close waves-effect waves-green btn-flat"> <i class="large material-icons">arrow_back</i></a>
                 </div>
                </div>
                </div>             
                </div>`;
      M.AutoInit();
      })
              }

            }
            
             
              
              
            
           
   





 

