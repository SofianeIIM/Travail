
class Pokemon {
    constructor(name, atk, def, pv , luck){
    this.name = name
    this.atk = atk
    this.def = def
    this.pv = pv
    this.luck = luck
    }
   
    IsLuck() {
        if(Math.ramdom()<= this.luck){
        return true
        }
    }
   
    attackPokemon(Pokemon){
    if(this.isLucky() === true ) {
        let damage = this.atk - Pokemon.def
        Pokemon.hp -= damage
        console.log (this.name + " a attaqué" + Pokemon.name + ", il lui reste " + Pokemon.pv)
        else {
            console.log("il rate son attaque")
        }
    }
        Pokemon.pv = this.pv - this.atk
    }

}

let tortipousse = new Pokemon("Tortipousse", 15 , 35 , 100, 0.6)
let tortank = new Pokemon("TorTank", 10 , 25 , 100, 0.7)

while(tortipousse.pv > 0 && tortank.pv > 0 ){
    tortipousse.attackPokemon(tortank)
    console.log("tortipousse attaque tortank, il lui reste" + " " + tortank.pv)
    
    if(tortank.pv <= 0){
    console.log ("tortank est mort")
    break
    }

    tortank.attackPokemon(tortipousse)
    console.log("tortank attaque tortipousse, il lui reste" + " " + tortipousse.pv)
    if (tortipousse.pv <= 0) {
    console.log("tortipousse est mort")
    break
    }
}


/*


class Pokemon {
    constructor(name , atk , def , hp){
        this.name = name
        this.atk = atk
        this.def = def
        this.hp = hp
    }

    attackPokemon(Pokemon) {
    let damage = this.atk - Pokemon.def
    Pokemon.hp -= damage
    }
}

let pikachu = new Pokemon ("Pikachu", 20 , 5) , 
*/
