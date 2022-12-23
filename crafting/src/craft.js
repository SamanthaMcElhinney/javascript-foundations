class Craft {
    constructor(craftInfo){
        this.name = craftInfo.type; 
        this.materials = craftInfo.materials
        this.completed = false
    }

    completeCraft() {
        if (this.completed = true) {
            return "All done! It looks great!";
        }
    }

    calculateProjectTotal() {
        
    }
}

module.exports = Craft;
