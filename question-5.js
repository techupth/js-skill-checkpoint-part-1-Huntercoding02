// Question #5
const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];

const promotionCode = "";

function calculateTotalPrice(products, promotionCode) {
  let totalPrice = 0;
  for (let i = 0; i < products.length; i++) {
    price = products[i].price * products[i].quantity;
    console.log(price);
    totalPrice = totalPrice + price;
    console.log(totalPrice);
  }

  if (promotionCode === "SALE20") {
    return totalPrice * 0.8;
  } else if (promotionCode === "SALE50") {
    return totalPrice * 0.5;
  } else {
    return totalPrice * 1;
  }
}
console.log(calculateTotalPrice(products, ""));
console.log(calculateTotalPrice(products,"SALE20"));
console.log(calculateTotalPrice(products,"SALE50"));



/*
function code(acc,curr){
  console.log(acc);
  console.log(curr);
  return (acc+curr.)
}

console.log(code);

let result = products.reduce(code)
console.log(result)

*/

// เริ่มเขียนโค้ดตรงนี้
/*
function calculateTotalPrice(product,promotionCode){
  if(promotionCode === "SALE20"){
    if(product === "เสื้อยืด"){
      return (products[0].price*products[0].quantity)-(products[0].price*products[0].quantity)*0.2 
    }else if(product === "กางเกงยีนส์"){
      return (products[1].price*products[1].quantity)-(products[1].price*products[1].quantity)*0.2 
    }else if(product === "เสื้อเชิ้ต"){
      return (products[2].price*products[2].quantity)-(products[2].price*products[2].quantity)*0.2 
    }
    
  }else if(promotionCode === "SALE50"){
    if(product === "เสื้อยืด"){
      return (products[0].price*products[0].quantity)-(products[0].price*products[0].quantity)*0.5
    }else if(product === "กางเกงยีนส์"){
      return (products[1].price*products[1].quantity)-(products[1].price*products[1].quantity)*0.5 
    }else if(product === "เสื้อเชิ้ต"){
      return (products[2].price*products[2].quantity)-(products[2].price*products[2].quantity)*0.5 
    }
  }else if(promotionCode.includes("")){
    if(product === "เสื้อยืด"){
      return (products[0].price*products[0].quantity)
    }else if(product === "กางเกงยีนส์"){
      return (products[1].price*products[1].quantity)
    }else if(product === "เสื้อเชิ้ต"){
      return (products[2].price*products[2].quantity)
    }
  }
}

console.log(calculateTotalPrice("เสื้อยืด","SALE20"));
console.log(calculateTotalPrice("เสื้อยืด","SALE50"));
console.log(calculateTotalPrice("เสื้อยืด",""));
console.log(calculateTotalPrice("เสื้อเชิ้ต","SALE20"));
console.log(calculateTotalPrice("เสื้อเชิ้ต","SALE50"));
console.log(calculateTotalPrice("เสื้อเชิ้ต",""));
console.log(calculateTotalPrice("กางเกงยีนส์","SALE20"));
console.log(calculateTotalPrice("กางเกงยีนส์","SALE50"));
console.log(calculateTotalPrice("กางเกงยีนส์",""));


*/

/*
console.log((products[0].price * products[0].quantity)*0.2)
function calculateTotalPrice(products,promotionCode){
  console.log((products.price * products.quantity)*0.2)
  if(promotionCode === "SALE20"){
    if(products === "เสื้อยืด"){
      console.log(products.price * products.quantity)
      promotionCode.inculdes("")
    }
  }
}
*/
//console.log(calculateTotalPrice("เสื้อยืด","SALE20"))
