const Candy = require("./candy")

class Bag {
    constructor(){
        this.empty = true
        this.count = 0
        this.candies = []
    }

    fill(candy){
        var newCandy = new Candy(candy)
        this.candies.push(newCandy.type)
        this.count += 1
    }

    contains(){
        //put in candy and return true or false if the bag contains that candy
       console.log(this.candies)
        if (!newCandy.type) {
          return true;
        } else {
          return false;
        }
    }

}



module.exports = Bag;
