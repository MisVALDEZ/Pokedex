
const listapokemon = document.querySelector("#listapokemon");

let url = "https://pokeapi.co/api/v2/pokemon/";



for(let i = 1;i <= 151; i++){
   
fetch(url + i)
.then(res => res.json())
.then(data=> mostrarpokemon(data))


}
  


function mostrarpokemon(poke){

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
    
    </div>`;
    listapokemon.append(div)

    
    
    
    
}


    











/*<div class="pokemon">
<p class="pokemon-id-back">#001</p> 
<div class="dodo">
 <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png" alt="pikachu">
</div>
<div  class="pokemon-info">
     <div class=" nombre-contenedor">
         <p class="pokemon-id">#001</p>
         <h2 class="pokemon-nombre">pikachu</h2>
     </div>
     <div class="pokemon-tipos">
         <p class=" electric tipo">Electric</p>
         <p class=" Fighthing tipo">Fighthing</p>
     </div>
     <div class="pokemon-stats">
         <p class="stat">0,3m</p>
         <p class="stat">56kg</p>
     </div>

</div>
</div>
*/


   
      
