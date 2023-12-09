const fullname = "Mohammadreza GolzarTabrizii";

const spaceIndex = fullname.indexOf(" ");

const name = fullname.slice(0 , spaceIndex);

const lastname = fullname.slice(spaceIndex +1);

const text =`you name is ${name } and your lastname is ${lastname}`;

console.log(spaceIndex);
console.log(name);
console.log(lastname);
console.log(text);