// Question #1
const myTodo = [
  { id: 1, todo: "Buy groceries" },
  { id: 2, todo: "Finish homework" },
  { id: 3, todo: "Call mom" },
  { id: 4, todo: "Wash dishes" },
];
// เริ่มเขียนโค้ดตรงนี้

//myTodo[3] = {id: 4, todo: "go gym"}
//myTodo.pop()
myTodo[3] = { id: 4, todo: "Go to the gym" }
myTodo.push({ id: 5, todo: "Walk the dog" })
myTodo.pop()
console.log(myTodo[3])


