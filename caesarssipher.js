function rot13(str) {
var answer = "";
for (var i = 0; i < str.length; i++){
  if (str.charCodeAt(i) > 64 && str.charCodeAt(i) < 91){
    // The formula is 91 + 13 = 78 <
  if (str.charCodeAt(i) < 78){
    // The formula is charAt + 13<
  answer += String.fromCharCode(str.charCodeAt(i) + 13)
}
else {
    // The formula is charAt +13 -26<
  answer += String.fromCharCode(str.charCodeAt(i) - 13) 
}
}
else {
  answer += str.charAt(i);
}
  }
  return answer;
}
console.log(rot13("SERR PBQR PNZC"));
