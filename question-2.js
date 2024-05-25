// Question #2
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
];
// เริ่มเขียนโค้ดตรงนี้
inventory[0].quantity = 200
inventory.push({ name: "Orange", price: 20, quantity: 300 })

const totalSum = inventory.reduce((acc,curr)=>{
  console.log(acc);
  console.log(curr);
  return acc+(curr.price*curr.quantity)
},0)
console.log(totalSum);
/*
let applePrice = inventory[0].price * inventory[0].quantity
let bananaPrice = inventory[1].price * inventory[1].quantity
let orangePrice = inventory[2].price * inventory[2].quantity
console.log(applePrice);
console.log(bananaPrice);
console.log(orangePrice);
let totalSum = applePrice + bananaPrice + orangePrice
*/
console.log(`มูลค่ารวมของจำนวนสินค้าทั้งหมดในสต็อก ${totalSum} บาท`);

