const sports = [];
sports.push("football");
sports.push("basketball");
sports.push("handball");
sports.push("vallyball");
sports.push("Tenis");
const stringSports = sports.join(",");
const text = `My favorite sports are ${stringSports}`;
const lastIndex = sports.length-1;
sports.splice(lastIndex);
const firstTwosports = sports.slice(0 , 2);
sports.splice(0 , 2 , firstTwosports); 
console.log(sports);
//console.log(firstTwosports);
