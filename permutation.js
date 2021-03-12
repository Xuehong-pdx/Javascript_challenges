function permAlone(str) {
  if (!str || typeof str !== "string") {
    return "Please enter a string";
  } else if (str.length < 2 ){
    return str;
  }
  permArr = [];
  for (i = 0; i < str.length; i++){
    ch = str[i];
    remainingChs = str.slice(0, i) + str.slice(i + 1, str.length);
    for (permutation of permAlone(remainingChs)){
      permArr.push(ch + permutation) }
  }
  
  count = 0
  unique = []
  for (s of permArr) {
    if (!(unique.includes(s))) {
      unique.push(s)
      count += 1
    }
  }
  return count;
}
 
console.log(permAlone('ab'));