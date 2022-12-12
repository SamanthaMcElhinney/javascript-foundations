class Hobbit {
    constructor(Object) {
        this.name = Object.name;
        this.age = 0
        this.adult = false
    }

    celebrateBirthday () {
         this.age += 1;
        if (this. age === 32) {
            return this.adult = false
        } else {
            return this. adult = true
        }
     
    }
}









module.exports = Hobbit;