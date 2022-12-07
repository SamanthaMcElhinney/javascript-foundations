class Dragon {
  constructor(dragonName, riderName) {
    this.name = dragonName;
    this.rider = riderName;
    this.hungry = if (this.eat() < 3) {
        true
    }

  }
  greet(){
    return(`Hi, ${this.rider}!`)
  }
  eat(){
    if (this.hungry < 3) {
        return this.hungry = true
    } else {
        return this.hungry = false
    }
  }
}

module.exports = Dragon;
