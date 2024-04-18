// let shoppingCart = [
//   { name: "diluc", price: 200 },
//   { name: "zhongli", price: 120 },
//   { name: "childe", price: 90 },
//   { name: "itto", price: 30 },
// ];

// let total = 0;
// shoppingCart.forEach(calculateTotal);

// function calculateTotal(cart) {
//   total = item + cart;
// }
// let i = 0;
// for (i = 0; i < 4; i++) {
//   total = total + shoppingCart[i].price;
//   console.log("total so far", total);
// }

//total =
// shoppingCart[0].price +
// shoppingCart[]

let shoppingCart = [
  { name: "diluc", price: 200 },
  { name: "zhongli", price: 120 },
  { name: "childe", price: 90 },
  { name: "itto", price: 30 },
];
let total = 0;
for (i = 0; i < 4; i++) {
  total += shoppingCart[i].price;
}
let discount = 0.1;
let discountedPrice = 0;
if (total > 100) {
  discountedPrice = total - total * discount;
}
console.log("total is", total);
console.log("discounted price is", discountedPrice);
