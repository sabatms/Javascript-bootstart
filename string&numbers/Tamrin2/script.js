const text = "hi; I m saba tahmasebi and im developer";
const firstletter = text.charAt(0);
const  upperCaseFirstletter = firstletter.toUpperCase();
const finalText = text.replace(firstletter,upperCaseFirstletter);
console.log(finalText);