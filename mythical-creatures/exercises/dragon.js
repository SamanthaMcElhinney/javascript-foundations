class Dragon {
  constructor(dragonName, riderName) {
    this.name = dragonName;
    this.rider = riderName;
    this.eatCount = 0;
    this.hungry = true;
  }
  greet() {
    return `Hi, ${this.rider}!`;
  }

  eat() {
    this.eatCount += 1;
    if (this.eatCount === 3) return (this.hungry = false);
  }
}

module.exports = Dragon;
