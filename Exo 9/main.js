
class Pokemon {
    constructor(name, atk, def, hp){
    this.name = name
    this.hp = hp
    this.atk = atk
    this.def = def
}}
attackPokemon(pokemon){
    pokemon.hp -=this.attack
}

let tortipousse = new Pokemon("Tortipousse", 50 , 25 , 1)
let tortank = new Pokemon("TorTank", 60 , 45 , 1)

while(tortipousse.hp > 0 || tortank.hp > 0 ){
    tortipousse.attackPokemon(tortank)
if(tortipousse.hp < 0){
    console.log ("tortipousse est mort")
    break
}

tortank.attackPokemon(tortipousse){
if (tortank <= 0){
    console.log("tortank est mort")
    break
}
}
}