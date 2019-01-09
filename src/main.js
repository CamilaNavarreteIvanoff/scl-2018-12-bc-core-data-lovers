

document.addEventListener('DOMContentLoaded', function() {
    window.M.AutoInit();
  });
  
  // interaccion del boton filtrar por tipo
document.getElementById("select2").addEventListener("change",() =>{
    document.getElementById("resultado").innerHTML = " " 
      
     let tipo =document.getElementById("select2").value
      for (let i = 0; i <window.pokego2.filterData(window.POKEMON.pokemon, tipo).length ; i++){   

       document.getElementById("resultado").innerHTML += ` 
       <div class="col s12 m3">
       <div id="cardgeneral" class="card">
           <div id="cardgeneral" class="card-image blue darken-4">
                 <img src="${window.pokego2.filterData(window.POKEMON.pokemon, tipo)[i].img}" alt="${window.pokego2.filterData(window.POKEMON.pokemon, tipo)[i].img}">
                 <div id="cardgeneral" class="card-content">
                <h3>${window.pokego2.filterData(window.POKEMON.pokemon, tipo)[i].name}</h3>
               <h5>${window.pokego2.filterData(window.POKEMON.pokemon, tipo)[i].num}</h5>
            </div> 
       </div>
       <div class="card-action">
          <button class="ficha waves-effect waves-light btn modal-trigger blue darken-4 " href="#modal1">Ficha pokemon</button>
       </div>
     </div>
   </div>
 </div>`;
  

     
   }
   abrirFicha(window.pokego2.filterData(window.POKEMON.pokemon, tipo)); 
   });


//interacción del boton ordenar

  const div_contenedor = document.getElementById("ordenado"); //imprime el listado ordenado
  
    document.getElementById("select1").addEventListener("change", () => {
        div_contenedor.innerHTML=""
  
        if (document.getElementById("select1").value === "a-z" || document.getElementById("select1").value === "z-a") {
          for (let i = 0; i < window.POKEMON.pokemon.length ;i++) {
       
          document.getElementById("ordenado").innerHTML +=` 
          <div class="col s12 m3">
          <div class="card">
              <div class="card-image blue darken-4">
                  <span class="card-title"> ${window.pokego.sortData(window.POKEMON.pokemon, "name", document.getElementById("select1").value)[i].name} </span>
                 <img src="${window.pokego.sortData(window.POKEMON.pokemon, "name", document.getElementById("select1").value)[i].img}" alt="${window.pokego.sortData(window.POKEMON.pokemon, "name", document.getElementById("select1").value)[i].img}">
                 <div class="num">${window.pokego.sortData(window.POKEMON.pokemon, "name", document.getElementById("select1").value)[i].num}</div>
          </div>
          <div class="card-action">
          <button class="ficha waves-effect waves-light btn modal-trigger blue darken-4 " href="#modal1">Ficha pokemon</button>
          </div>
        </div>
      </div>
    </div>
           
       `    
       ;}
       abrirFicha(window.pokego.sortData(window.POKEMON.pokemon, "name", document.getElementById("select1").value)); 
       }     

      if (document.getElementById("select1").value === "1-151"){
      for (let i = 0; i < window.POKEMON.pokemon.length ;i++) {
      document.getElementById("ordenado").innerHTML += `<img src="${window.pokego.sortData(window.POKEMON.pokemon, "number", document.getElementById("select1").value)[i].img}" alt="${window.pokego.sortData(window.POKEMON.pokemon, "number", document.getElementById("select1").value)[i].img}"> ${window.pokego.sortData(window.POKEMON.pokemon, "number", document.getElementById("select1").value)[i].id}`;


        
      }

      }});

    
       
  
    
//aqui va la interacción del boton GO

       document.getElementById("go").addEventListener("click", () =>{
         document.getElementById("portada").style.display="none";
         document.getElementById("information").style.display="block"; 
         
       });//aqui debe aparecer la pagina de la información de los pokemones


            
//aquí va la interaccion de las fichas por pokemon

           let fichaPokemon =  document.getElementsByClassName("ficha");
            function abrirFicha(data){
              for (let i=0; i < fichaPokemon.length; i++){
                fichaPokemon[i].addEventListener("click",()=>{
                  document.getElementById("probandomodal").innerHTML =`
                   <div id="modal1" class="modal">
                <div class="modal-content">
                 <div class="row">
              <div class="col s4"><span class="flow-text">
              <div class="num">
               <span class="blue-text text-darken-2"><h3>#${data[i].num}</h3></span></div>
               <div class="name"><h3><b>${data[i].name}</b></h3></div>
               <div class="height"><h5><b>Altura:</b>${data[i].height}</h5></div>
               <div class="weight"><b>Peso:</b>${data[i].weight}</div>
               <div class="candy_count"><b>Caramelos contador:</b>${data[i].candy_count}</div>
              </span></div>
          
              <div class="col s4"><span class="flow-text">
               <div> <h5 class="center-align"><b>Tipo</b></h5></div>          
               <div class="type center-align">${data[i].type}</div>
               <div> <h5 class="center-align"><b>Debilidades</b></h5></div> 
               <div> <h6 class="type center-align"> "Fire", "Ice","Flying","Psychic"</h6></div>  
              </span></div>
          
              <div class="col s4 "><span class="flow-text">
               <div class="respondive-image">
               <img src="${data[i].img}">
               <div> <h5 class="center-align"><b>Evoluciones</b></h5></div> 
              </div>           
              </span></div>      
          
              <div class="modal-footer">
          <a href="#!" class="modal-close waves-effect waves-green btn-flat"> <i class="large material-icons">arrow_back</i></a>
          </div>
          </div>`;
        window.M.AutoInit();
        })
                }

              }
            
            
             
              
              
            
           
   





 
