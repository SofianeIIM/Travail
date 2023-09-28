/*
class hero {
    constructor(name, pv, atk, def){
    this.name = name
    this.pv = pv
    this.atk = atk
    this.def = def
}
attackMonster(monstre){
    monster.hp -=this.atk
}
}

let samy = new hero("Samy", 100, 5 , 7)
let sofiane = new hero ("Sofiane" , 120 , 2 , 12)
*/


class Pokemon {
    constructor(name, atk, def, hp){
    this.name = name
    this.atk = atk
    this.def = def
    this.pv = pv
}
    attackPokemon(Pokemon){
    Pokemon.hp = this.pv - this.atk
}}

let tortipousse = new Pokemon("Tortipousse", 50 , 35 , 100)
let tortank = new Pokemon("TorTank", 60 , 25 , 100)

while(tortipousse.hp > 0 || tortank.hp > 0 ){
    tortipousse.attackPokemon(tortank)
    if(tortipousse.hp < 0){
    console.log ("tortipousse est mort")
    break
    }

    tortank.attackPokemon(tortipousse)
    if (tortank <= 0){
    console.log("tortank est mort")
    break
    }
}