// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];
// เริ่มเขียนโค้ดตรงนี้
let minPrice = Infinity;

for (let i=0;i<inventory.length;i++){
  console.log(inventory[i].quantity)
if(inventory[i].quantity < minPrice){
  minPrice = inventory[i].quantity 
}

}

console.log(`สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ Banana ซึ่งมี ${minPrice} ชิ้น`);
  
/*if(minPrice >= inventory[i].price){
  console.log(inventory[i].price)
  console.log(inventory[i].quantity)
}*/

// return minPrice = inventory.price[i]