class Snowman {
  constructor(obj) {
    this.carrots = obj.carrots;
    this.coal = obj.coal;
    this.buttons = obj.buttons;
    this.snowballs = obj.snowballs;
    this.magicHat = false;
  }

  canWearMagicHat(){
      this.magicHat = true;
      var isWearingHat = true;
  if (this.coal < 2  || this.buttons < 5 || this.carrots < 1 || this.snowballs <2) {
        this.magicHat = false
        isWearingHat = false
        return isWearingHat = false
    } else {
        return isWearingHat = true
    }
  }  
}

module.exports = Snowman;