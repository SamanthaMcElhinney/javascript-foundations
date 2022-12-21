class Pirate {
    constructor(pirateName, job) {
        this.name = pirateName
        this.job = job || "scallywag";
        this.cursed = false
        this.booty = 0

    }

    robShip() {
        if (this.booty === 500) {
            this.cursed = true 
            return ("ARG! I've been cursed!");
        }
            this.booty += 100; 
        return `YAARRR!`;

    }

    liftCurse() {
        if (this.booty <= 300) {
            return ("You don't need to lift a curse!");
        } else if (this.botty >= 300 && this.cursed === true){
            return ('Your curse has been lifted!')
        }
    }
}

module.exports = Pirate;