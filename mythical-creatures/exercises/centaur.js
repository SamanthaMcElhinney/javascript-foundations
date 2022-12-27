class Centaur {
    constructor(centaurInfo) {
        this.name = centaurInfo.name
        this.breed = centaurInfo.type
        this.cranky = false
        this.standing = true
        this.layingDown = false
        this.counter = 0
    }

    shootBow(){
        if (this.cranky || this.layingDown ) {
            this.layingDown = false
            return "NO!";
        } 
        this.counter += 1;
        if (this.counter >=3) {
            this.layingDown = false
            this.cranky = true;
        }
        return 'Twang!!!'
    }

    run(){
        if (this.cranky && this.layingDown === false) {
            this.layingDown = false
            this.standing = true
          return "NO!"
        } 
        this.counter +=1;
        if (this.counter >=3 && this.layingDown === false) {
            this.cranky = true;
            this.layingDown = false
            this.standing = true
        }
        return 'Clop clop clop clop!!!'
        }
    sleep() {
        this.cranky = false
        if (this.standing === true) {
            return 'NO!'
        } else{
            return "ZZZZ";
        }
        
    }

    layDown() {
        this.layingDown = true
        this.standing = false
        this.sleep()
        return 'ZZZZ'
    //     if (this.standing === true) {
    //         this.layingDown = false
    //         this.standing = true
    //     } else if (this.layingDown === true) {
    //         this.standing = false
    //         this.layingDown = true
    //     }
    }
    standUp(){
        this.standing = true
        this.layingDown = false
    }

    drinkPotion(){
          this.cranky = false;
        if(this.standing === false) {
            return "Not while I'm laying down!";
        }
    }
}

module.exports = Centaur