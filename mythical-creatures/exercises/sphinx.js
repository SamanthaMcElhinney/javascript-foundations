class Sphinx {
  constructor(name = null) {
    this.name = name;
    this.riddles = [];
  }

  collectRiddle(riddle) {
    this.riddles.push(riddle);
    if (this.riddles.length > 3) {
      this.riddles.shift();
    }
  }

  attemptAnswer(userAnswer) {
    if (userAnswer === this.riddles) {
        return this.riddles = []
  }
}
}
module.exports = Sphinx