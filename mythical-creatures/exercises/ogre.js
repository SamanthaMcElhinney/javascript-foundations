class Ogre {
    constructor(objectInfo){
        this.name = objectInfo.name
        this.home = objectInfo.abode ||'Swamp'
        this.encounterCounter = 0
        this.swings = 0
    }

    encounter(human){
        human.knockedout = false
        human.encounterCounter += 1;
        if (human.noticesOgre() === true) {
            this.swings += 1
            human.knockedout = true
        } else {
            this.swings
        }
    }

    swingAt(){
        this.swings +=1
    }
}

module.exports = Ogre;