const price1 = 10;
const price2 = 25;
const price3 = 18;

const balance = 200;

const totalpric = price1 + price2 + price3
console.log(totalpric);

const averageprice = totalpric/4;
console.log("Average price:" , averageprice);

const finalprice = totalpric * 0.95;
console.log("Final price :" , finalprice);

const canBuy = balance >= finalprice;
console.log("canBuy :" ,canBuy);

const message = canBuy ? "Great! you can buy these products" :"sorry";
console.log(message);