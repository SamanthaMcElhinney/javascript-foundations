class Skier {
    constructor(name){
        this.name = name
        this.hasLiftTicket = true
        this.skillLevel = 1
        this.nextSlope = 'green circle'
    }

    takeLesson(){
        this.skillLevel +=1
        if (this.skillLevel >= 4) {
            return this.nextSlope = 'black diamond'
        }
    }

    pickSlope(){
        if (this.skillLevel >= 2 && this.skillLevel < 4) {
           return this.nextSlope = 'blue square'
        } else if (this.skillLevel > 5) {
            this.nextSlope = 'black diamond'
        }
    }
}

module.exports = Skier;