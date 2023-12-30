// const myArray = ["saba","tahmasebi",25];
// console.log(myArray[0]);
// console.log(myArray[1]);
// console.log(myArray[2]);
// console.log(myArray[3]);

// const myArray1 = ["ali", "milad", "yasii", "sara"];
// //myArray1.push("reza");
// //myArray1.unshift("soha");
// //myArray1.pop();
// //myArray1.shift();
// console.log(myArray1);

// const myArray =["sara", 25, "gholami"];
// const newmyArray = myArray.toString();
// console.log(newmyArray);
// myArray[0] = "sanam";
// console.log(myArray);

// const array1 = ["sara", 23];
// const array2 = ["saba", 24];
// const array3 = [
//  [1,2,3],
//  [4,5],
// ];
// const newArray =array1.join(" - ");
// const newArray2 =array1.concat(array2);
// const newArray3 = array3.flat();
// console.log(newArray);
// console.log(newArray2);
// console.log(newArray3);

// const array1= ["Ali", "Arian", "reza",21];
// console.log(array1.indexOf("Ali"));
// console.log(array1.includes(21));

// const myArray =["milad","azami", 25, 23, 34, 33];
// const newArray = myArray.slice(2);
// console.log(newArray);
// //const newArray2 = myArray.splice(1);
// const newArray2 = myArray.splice(2,2);
// console.log(newArray2);

// const name1 =["elii", "mohabat", "reza", "shervin", "barbod"];
// console.log(name1.sort());
// const number1 = [5, 21, 1, 4, 3, 10 , 33, 66, 99];
// console.log(number1.sort());
// console.log(number1.reverse());

// const sports =[];
// sports.push("football");
// sports.push("tenis");
// sports.push("vollyball");
// sports.push("badminton");
// sports.push("baisball");
// const stringsports = sports.join(" ");
// const text = `my favorit sports are ${stringsports}.`;
// const lastindex = sports.length-1;
// sports.slice(lastindex);
// const newArray = sports.slice(0,2);
// sports.slice(0,2,newArray);
// console.log(newArray);

// let x = 10;
// let y = x;
// x = 5
// console.log("x",x);
// console.log("y",y);

// let x = [1,2,3];
// let y = x;
// x.push(4,5);
// console.log(x);
// console.log(y);

// const z = [1,2,3];
// const copyZ = z.slice();
// z.push(4);
// console.log(z);
// console.log(copyZ);

// const data = [1,2,3];
// const copyData = [...data];
// data.push(4);
// console.log(data);
// console.log(copyData);

//   const data =[1,2,3,4];
//   console.log(...data);
//   const copyData = [...data];
//   data.push(5);
//   console.log(data);
//   console.log(copyData);
// const names = ["ali", "milad", "arian"];
// const newArray = ["start", ...data, ...names];
// console.log(newArray);

// const data = ["saba", "tms", 25];
// const firstName = data [0];
// const lastname = data [1];
// const age = data [2];
// const string = ` I am ${firstName}${lastname} and I'm ${age} years old`
// console.log(string);
// const [firstName2 , lastname2]= data;
// console.log(firstName2);
// console.log(lastname2);
// const data2 = ["ali", "sobhanii", 21, 1, 2, 3, 4];
// const [firstName3 , ,age3, ...other] = data2;
// console.log(firstName3);
// console.log(age3);
// console.log(other);

const fullStack = [
  ["html", "css", "js", "react"],
  ["Node", "Express", "MongoDb"],
];
const [frontend, backend] = fullStack;
console.log(frontend);
console.log(backend);
const [html, css, js, react] = frontend;
console.log(html);
console.log(css);
console.log(js);
console.log(react);
const [Node, Express, MongoDb] = backend;
console.log(Node);
console.log(Express);
console.log(MongoDb);
