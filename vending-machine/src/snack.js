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
            console.log('1', this.itemsInStock)
            return `Item taken! There are now ${this.itemsInStock} items left.`;
        }else if (this.itemsInStock === 0){
            this.itemsinStock = 0
            return `Sorry, no ${this.name} left in stock!`
        }
    }
}

module.exports = Snack;
