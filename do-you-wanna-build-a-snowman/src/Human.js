var Snowman = require('./Snowman');

class Human {
    constructor(name, object){
        this.name = name
        this.wantsToBuildASnowman = true
        this.materials = object.snowballs, object.coal, object.buttons, object.carrots
    }

}

module.exports = Human;