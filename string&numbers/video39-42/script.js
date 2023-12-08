const text = "Saba Tahmasebi nezhad Shz";
// console.log(text[8]);
// console.log(text.indexOf("T"));
// console.log(text.charAt(6));

// includes =  boolean برای ما می اید نمایش می دهد
// console.log(text.includes("Tahmasebi"));

// inLowercase میاد برای ما تبدیل به حروف کوچک انگلیسی میکنه
// toUppercase() میاد برای ما تبدیل به حروف بزرگ انگلیسی میکنه
// console.log(text.toLowerCase());
// console.log(text.toUpperCase())

// const textArray = text.split(" ");
//console.log(textArray);

//console.log(text.replace("Saba" , "Soheila"));
// replace = میاد اگر بخوایم اسمی یا حرفی رو عوض کنیم این کار رو برای ما انجام میده


// const text2 = "and instrudect";
// const  finalText = text.concat(" ", text2);
// console.log(finalText);

// console.log(text);
// console.log(text.trim());

//const newText = text.slice(6,11);
//const newText = text.slice(6);
//const newText = text.slice(-2);
//const newText = text.substring(6,11);
const newText = text.substr(5,6);
console.log(newText);

// اعداد مثبت قرار می گیردsubstring عمل می کند با این تفاوت که در slice همانند substring 
//slice = علاوه بر اعداد مثبت اعداد منفی هم استفاده میشه کرد 
// substr = رو از چه شماره ای شروع میکنه بعد بهش میگم چندتا برو جلو و نمایش بدهindex میاد 