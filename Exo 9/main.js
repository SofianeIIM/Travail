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
    this.hp = hp
    this.atk = atk
    this.def = def
}}

let tortipousse = new Pokemon("Tortipousse", 50 , 25 , 1)
let tortank = new Pokemon("TorTank", 60 , 45 , 1)

console.log(tortipousse)
console.log(tortank) 

Pokemon.attackMonster(Pokemon){
    Pokemon.hp -=Pokemon.atk
}

tortipousse.attackMonster(tortank)   
console.log(tortank.hp) 

