class Golfer {
  constructor(golferInfo) {
    this.name = golferInfo.name;
    this.handicap = golferInfo.handicap;
    this.frustration = 0;
    this.confidence = 0;
  }
  calculateAvg(par) {
    var average = this.handicap + par;
    console.log(this.handicap);
    return `I usually shoot a ${average} on average.`;
  }

  playRound(golfCourse) {
    if (golfCourse.difficulty === "hard") {
      this.frustration = 500;
    } else if (golfCourse.difficulty === "moderate") {
      this.frustration = 100;
    }
  }

  hitTheRange() {
    this.confidence += 10;
  }

  marvel(golfCourse) {
    var features = golfCourse.features.join(" and ");
    return `I love the ${features} on this course!`;
  }

  whatYaShoot(score){
     this.frustration += 10;
    if (score > 0) {
        this.frustration += 10
        console.log(this.frustration)
        return "Doh!"
    } else if (score === 0) {
        this.frustration = 10
        return 'Booyah!'
    } else if (score < 0) {
        this.frustration = 0
        console.log('2', this.frustration)
        return 'I AM THE GREATEST GOLFER ALIVE!'
    }   
}
}
module.exports = Golfer;
