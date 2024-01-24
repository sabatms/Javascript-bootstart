// const number = 8;
// if(number < 0 ){
// console.log("This number is negetive");
// }else if(number > 0) {
// console.log("This number is posetive ")
// } else{
// console.log("this is 0")
// }

// const string = "eli";
// if(string == "sanam"){
// console.log("true")
// }else {
// console.log("false")
// }

// const object = {name : "ali" , lastName : "tehrani",age : "23",country: "uae"}
// const keys = Object.keys(object);
// for(let i = 0; i < keys.length; i++){
// console.log(keys[i]);
// console.log(object[keys[i]]);
// }

// let i = 1;
// while (i < 7){
// console.log(i);
// i++
// }

// let statuse = true;
// let i = 1;

// while(statuse){
// console.log(i);
// i++;
// if (i === 10){
// statuse = false;
// }
// }

// let i = 2;
// do {
//   console.log(i)
//   i++
// } while (i < 8)

const numbers = [2, 4, 6, 8, 10, 12, 1, 16, 18];

const newNumbers = numbers.map((numbers) => numbers * 3);

console.log(newNumbers);
