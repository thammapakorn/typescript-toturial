"use strict";
// any
// unknown
function formatNumber(num) {
    return num.toFixed(2);
}
let amount = 50.1234;
amount = "55.222";
if (typeof amount === "number") {
    console.log(formatNumber(amount));
}
else {
    console.log("ค่าไม่ใช่ number");
}
