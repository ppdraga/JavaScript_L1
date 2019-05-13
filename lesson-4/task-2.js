// 2. Продолжить работу с интернет-магазином:

// a. В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими
//      объектами можно заменить их элементы?
// b. Реализуйте такие объекты.
// c. Перенести функционал подсчета корзины на объектно-ориентированную базу.

var cart = {
    products: [
        {
            product: 'Prod1',
            quantity: 2,
            price: 1000
        },
        {
            product: 'Prod2',
            quantity: 3,
            price: 500
        },
    ],
    countBasketPrice: function() {
        var result = 0;
        for (i in this.products) {
            result += this.products[i].quantity * this.products[i].price;
        }
        return result;
    }

}

console.log(cart.countBasketPrice());