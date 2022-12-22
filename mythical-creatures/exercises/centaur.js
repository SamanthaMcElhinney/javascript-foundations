class Centaur {
    constructor(centaurInfo) {
        this.name = centaurInfo.name
        this.breed = centaurInfo.type
        this.cranky = false
        this.standing = true
        this.work = 0
    }

    shootBow(){
        this.work = 1
        if (this.cranky === false || this.work <=2 ) {
            this.cranky = true;
            return "Twang!!!";
        } else if (this.cranky === true) {
            return "NO!";
        }
    }

    run(){
        this.work = 1
        if (this.cranky === false || this.work <=2) {
             return "Clop clop clop clop!!!";
        } else {
            return "NO!";
        }
    }
}


module.exports = Centaur