console.log("=== 나머지 문법 ===");
function func1(a, b, c, ...rest) {
  console.log(a, b, c, rest);
}
func1(10, 20, 30, 40, 50, 60, 70);

function func2({ name, age, ...rest }) {
  console.log(name, age, rest);
}
func2({ name: "wade", age: 20, company: "weniv", level: 3 });

console.log("=== spread vs rest ===");
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr = [...arr1, ...arr2];
console.log(arr);