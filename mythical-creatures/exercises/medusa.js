var Person = require('./person');
var Statue = require('./statue');

class Medusa {
    constructor(name) {
        this.name = name;
        this.statues = []
    }

    gazeAtVictim(person) {
        var newStatue = new Statue(person.name)
        if (this.statues.length < 3) {
            this.statues.push(newStatue);
        } else if (this.statues.length >= 3) {
            var releasedVictim = new Person(this.statues[0].name)
            this.statues.shift()
            this.statues.push(newStatue)
            releasedVictim.mood = 'relieved'
            return releasedVictim
        }
//gazing at four victims. We can only have three maximum. The victim that is shifted out of the array is currently a statue. The test is wanting that statue to be a person.

//we need to change person's mood from frightened to relieved. We first need to access the mood, then reassign it.
    }
}



module.exports = Medusa;