const string = "50";
const number = Number(string);
console.log(number);

// Number(string) : میاد اگر عدد به صورت رشته هست رو تبدیل به عدد واقعی میکنه

const string1 = "234567"
const number1 = parseInt(string1);
console.log(number1);

// parsInt() =>  میاد عدد رو از حالت  که هست رو به همان صورت برای ما نمایش میده و از حالت رشته خارج میکنه

const string2 = "2.4597544";
const number2 = parseFloat(string2);
console.log(number2);

//parseFloat() => عدد رو از حالت رشته خارج ممیکنه و اعشار هم اگر داشته باشد اعشار رو به ما نشان میدهد