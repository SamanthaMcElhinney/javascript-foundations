class VendingMachine {
  constructor(obj) {
    this.id = obj.id;
    this.isBroken = obj.isBroken;
    this.snacks = [];
  }

  addSnacks(snack){
    this.snacks.push(snack)
  }
}

module.exports = VendingMachine;
