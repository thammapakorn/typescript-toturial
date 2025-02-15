"use strict";
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
// let username:unknown;
// username="Pream";
// console.log((username as string).toUpperCase())
// console.log((<string>username).toUpperCase())
// เงื่อนไข if else
let amount = 50;
let result;
if (amount % 2 == 0) {
    result = "หารสองลงตัว เลขคู่";
}
else {
    result = "หารสองไม่ลงตัว เลขคี่";
}
console.log(`ผลลัพธ์ ${result}`);
// ternary
result = (amount % 2 == 0) ? "หารสองลงตัว" : "หารสองไม่ลงตัว";
console.log(result);
