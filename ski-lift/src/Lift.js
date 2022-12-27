var Skier = require('./Skier');
class Lift {
    constructor(){
        this.inService = true
        this.limit = 3
        this.skiers = []
        this.safetyBar = 'up'
        this.hasLiftTicket = true
    }

    admitSkier(name, hasLiftTicket){
        var skier = new Skier(name, hasLiftTicket)
        console.log(skier.hasLiftTicket)
        if (this.skiers.length < 2 & skier.hasLiftTicket === true) {
            console.log("1", this.hasLiftTicket)
            this.skiers.push(skier)
        } else if (this.skiers.length < 1 && skier.hasLiftTicket === false) {
            console.log("2",this.hasLiftTicket)
            return `'Sorry, Hannah. You need a lift ticket!'`
        } else {
            return `Sorry, Kayla. Please wait for the next lift!`;
        }
    }
}

module.exports = Lift;