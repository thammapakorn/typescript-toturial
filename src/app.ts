// any

// unknown
// function formatNumber(num: number) {
//   return num.toFixed(2);
// }

// let amount: unknown = 50.1234;
// amount = "55.222";
// if (typeof amount === "number") {
//   console.log(formatNumber(amount));
// } else {
//   console.log("ค่าไม่ใช่ number");
// }

// type Assertion
let username:unknown;
username="Pream";
console.log((username as string).toUpperCase())
console.log((<string>username).toUpperCase())
