let musique = ["Wejdene" , "I'm Still Standing." , "Staying Alive." , "LogoB-GT." , "Hier Encore."]

class Passager{
    constructor(name , pv){
        this.name = name
        this.pv = pv
    }

  
    trajet(TaxiChange = 0 , RedLight = 0){
        
    

        while (RedLight < 30 && this.pv > 0){
            let random = musique[Math.floor(Math.random()*5)]
            RedLight ++ 
            console.log("Jonh entend la musique" , random )
            
            if (random != musique [0]){
                console.log("Elle est agréable cette petite chansonnette ? On a passer le" , RedLight , "feu rouge !")
            }
            
            if (random === musique [0]){
                this.pv--
                TaxiChange++ 
                console.log("AAAAAAAAAAAAAAAAAARGH QU'ELLE EST CETTE SORCELERIE !? Jonh perd un point de vie. Il lui reste en reste" , this.pv)
                console.log("Changeons ce Taxi de malheur ! Jonh à pris son" , TaxiChange , "taxi")
            }
            if (this.pv === 0){
                    console.log("Jonh explose !")
                    console.log("Paix à son âme... F5 pour retenter !")
                    break
                }
            if (RedLight === 30){
                    console.log("Cebon ! Jonh est enfin bien arrivé ! Cette console est bien codé quand même ^^")
                    console.log("Jonh à du changer de Taxi" , TaxiChange , "fois.")
                    break
                }
            
            


        }
    }
    

}
let John = new Passager("Jonh", 10)
John.trajet()





// operators[Math.floor(Math.random()*4)] /