class Dragon {
  constructor(dragonName, riderName) {
    this.name = dragonName;
    this.rider = riderName;
    this.eat = 1;
    this.hungry = true;
      if (this.eat > 3) {
        this.hungry = true;
      } else {
      this.hungrey = false;
      }
  }
  greet() {
    return `Hi, ${this.rider}!`;
  }

  eat() {
    if (this.eat >= 3) {
      return true
    } else {
      return false
    }
  }
}

module.exports = Dragon;
