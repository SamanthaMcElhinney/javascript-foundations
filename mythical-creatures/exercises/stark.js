const Direwolf = require("./direwolf");

class Stark {
    constructor(objectName){
        this.name = objectName.name
        this.location = objectName.area || "Winterfell";
        this.safe = false
    }

    sayHouseWords(){
        if (this.safe){
            return "The North Remembers";
        }
       return "Winter is Coming";
    }

    callDirewolf(name, location){
        var direwolf = new Direwolf(name, location)
        direwolf.home = this.location
        direwolf.protect(this)
        return direwolf
    }
}

module.exports = Stark;