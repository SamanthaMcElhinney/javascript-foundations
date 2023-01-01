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
        var totalCost = this.craft.materials
        for (var i = 0; i < materials.length; i ++) {
            console.log(materials[i].price)
        }
        return totalCost
    }
}

module.exports = Craft;
