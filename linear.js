function verifyNumber(arrays, numberToSearch){
  for (var i = 0; i < arrays.length; i++){
    if (numberToSearch == arrays[i]){
      return true;
    }
  }
  return false;
} 
console.log(verifyNumber([2,4,6,10,18,987,23,46] , 23));
