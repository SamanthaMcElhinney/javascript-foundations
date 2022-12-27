class Snack {
    constructor(name, pricePerUnit){
        this.name = name
        this.price = pricePerUnit
        this.itemsInStock = 0

    }

    stockItems(num){
        this.itemsInStock += num
    }

    removeItem(){
        if (this.itemsInStock > 0) {
            this.itemsInStock -= 1;
            return `Item taken! There are now ${this.itemsInStock} items left.`;
        } else if (this.itemsInstock === 0) {
            this.itemsInStock = 0
            return `Sorry, no  hersey\'s milk chocolate left in stock!`;
        }
    }
}

module.exports = Snack;
