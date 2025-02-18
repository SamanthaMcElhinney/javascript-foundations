class Material {
  constructor(name, price, amount, units) {
    this.name = name;
    this.price = price;
    this.amount = amount;
    this.units = units;
  }

  useMaterial(usedAmount) {
    if (this.amount >= usedAmount) {
      this.amount = this.amount - usedAmount;
      return `You now have ${this.amount} ${this.units} of ${this.name} left.`;
    } else {
      return `You don't have enough ${this.name}! Try using ${this.amount} ${this.units} or less.`;
    }
  }

  calculateMaterialCost() {
    var materialCost = this.price * this.amount;
    return materialCost
  }
}
// pri

module.exports = Material;
