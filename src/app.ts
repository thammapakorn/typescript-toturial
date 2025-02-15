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
// let amount:number = 50;
// let result:string;

// if(amount % 2 == 0){
//  result="หารสองลงตัว เลขคู่" 
// }else{
//   result="หารสองไม่ลงตัว เลขคี่"
// }
// console.log(`ผลลัพธ์ ${result}`)

// ternary
// result = (amount % 2 == 0)? "หารสองลงตัว" : "หารสองไม่ลงตัว"
// console.log(result)

//switch case
// let service:number = 1;
// let result:string;

// switch(service){
//   case 1 : result = "สอบถามยอดเงินคงเหลือในบัญชี";
//   break;
//   case 2 : result = "ทำการฝากเงิน";
//   break;
//   case 3 : result = "ทำการถอนเงิน";
//   break;
//   default: result = "หมายเลขบริการไม่ถูกต้อง"
// }
// console.log(`ผลลัพธ์ ${result}`)

// for loop
// for(let count:number=1; count <= 10; count++){
//   console.log(count);
// }

//  let users:string[]=["Pream","June","Mama"]
//  users.forEach((element)=>{
//   console.log(element)
//  })
// for(let i=0;i<users.length;i++){
//   console.log(users[i]);
// }

