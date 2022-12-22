class Pirate {
    constructor(pirateName, jobDetails) {
        this.name = pirateName
        this.job = jobDetails || "scallywag";
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
        console.log(this.booty)
     if (this.booty >= 300 && this.cursed === true) {
        this.cursed = false
        this.booty -= 300;
        console.log('this.booty1', this.booty)
        return 'Your curse has been lifted!'
     } else {
        return 'You don\'t need to lift a curse!';
     }
}
}

module.exports = Pirate;