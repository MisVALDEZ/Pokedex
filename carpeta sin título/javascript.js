
const listapokemon = document.querySelector("#listapokemon");
const botonesheader = document.querySelectorAll(".btn ");
const verpokemon = document.querySelector("#verpokemon");
let url = "https://pokeapi.co/api/v2/pokemon/";



for(let i = 1;i <= 151; i++){
   
fetch(url + i)
.then(res => res.json())
.then(data=> mostrarpokemon(data))


}
  


function mostrarpokemon(poke){
    // console.log("holaaaaaaaa",poke)

   let tipos = poke.types.map(type=> 
             ` <p class=" ${type.type.name} tipo"> ${type.type.name}</p>` )
             tipos = tipos.join('');  

    const div = document.createElement("div");
    div.classList.add("pokemon");
    div.innerHTML = `<p class="pokemon-id-back">#${poke.id}</p> 
    <div class="dodo">
     <img src="${poke.sprites.other["official-artwork"].front_default}" alt= "${poke.name}" >
    </div>
    <div  class="pokemon-info">
         <div class=" nombre-contenedor">
             <p class="pokemon-id">#${poke.id}</p>
             <h2 class="pokemon-nombre">${poke.name}</h2>
         </div>
         <div class="pokemon-tipos">
         ${tipos}
         </div>
         <div class="pokemon-stats">
             <p class="stat">${poke.height}m</p>
             <p class="stat">${poke.weight}kg</p>
         </div>
         <div>  
          
        
         

      
               
    </div>`;
  

    listapokemon.append(div)

    
    
}















botonesheader.forEach(boton => boton.addEventListener("click",(event) =>{
 const botonId = event.currentTarget.id;
 listapokemon.innerHTML = "";

for(let i = 1;i <= 151; i++){
   
    fetch(url + i)
    .then(res => res.json())
    .then(data=> {
    
      if(botonId === "ver-todos") {
        mostrarpokemon(data);
      }else{
        const tipos = data.types.map(type => type.type.name);
      if(tipos.some(tipo => tipo.includes(botonId))){
        mostrarpokemon(data);
      }

      }
    


      
    })
    
    
    }
      
}))


   
      
