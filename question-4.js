// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 40 },
  { name: "Orange", price: 30, quantity: 60 },
];
// เริ่มเขียนโค้ดตรงนี้
let minPrice = Infinity;
let namelowest = ""

for (let i=0;i<inventory.length;i++){
  console.log(inventory[i].quantity)
if(inventory[i].quantity < minPrice){
  minPrice = inventory[i].quantity 
  namelowest = inventory[i].name
}

}

console.log(`สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ ${namelowest} ซึ่งมี ${minPrice} บาท`);
  
/*if(minPrice >= inventory[i].price){
  console.log(inventory[i].price)
  console.log(inventory[i].quantity)
}*/

// return minPrice = inventory.price[i]