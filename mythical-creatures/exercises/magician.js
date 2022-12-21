class Magician {
  constructor(magicianName) {
    this.name = "The Great " + magicianName.name;
    this.assistant = magicianName.assistant;
    this.favoriteAccessory = magicianName.clothing || "top hat";
    this.confidencePercentage = 10
    }

  performIncantation(spellName){
    return spellName.toUpperCase()+ '!'
    }

    performTrick() {
        this.confidencePercentage += 10
        if (this.favoriteAccessory === 'top hat') {
           return "PULL RABBIT FROM TOP HAT";
        } else {
          return "PULL DOVE FROM SLEEVE";
        }
    }
    performShowStopper(){
        if (this.confidencePercentage < 100 || this.assistant === false) {
            return "Oh no, this trick is not ready!";
        } else {
            return "WOW! The magician totally just sawed that person in half!";
        }
    }
}

    //  this.favoriteAccessory = 'top hat'
//     if (this.name === "Casey") {
//       this.favoriteAccessory = "cape";
//     } else if (this.name === "Scott") {
//       this.favoriteAccessory = "top hat";
//     }
//     if (this.clothing === "cape") {
//       this.favoriteAccessory.push(this.clothing);
//     }
//   }

//   performIncantation(spell) {
//     if (this.spell
//   }
// }   
    
    
    //WHen we instantiate a new instance of Magician it should return their favorite accessory as top hat
// When we instantia a new instance of Magician class the clothing value should be cape
//which changes the favorite accessory
module.exports = Magician