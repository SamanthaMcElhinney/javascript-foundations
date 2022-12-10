class Vampire {
  constructor(name, pet) {
    this.name = name;
    this.pet = pet ||'bat'
    this.ouncesDrank = 0
    this.thirsty = true 
  }

  drink () {
    this.thirsty = false
    if (this.ouncesDrank === 50) {
      console.log('question', this.ouncesDrank)
      return 'I\'m too full to drink anymore!'
    } else {
      this.ouncesDrank += 10; 
    }    
  }
}


module.exports = Vampire;
