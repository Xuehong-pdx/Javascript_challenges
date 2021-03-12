//Given an array of characters, compress it in-place. 
//The length after compression must always be smaller 
//than or equal to the original array. Every element of 
//the array should be a character (not int) of length 1. 
//After you are done modifying the input array in-place,
// return the new length of the array.
//https://leetcode.com/problems/string-compression/description/
// Ex: ["a","a","b","b","c","c","c"] 
//Ans: 6 ["a","2","b","2","c","3"]

function compress(chars){
    let dic={}
    for (i=0; i<chars.length; i++){
        if (chars[i] in dic){
          dic[chars[i]] += 1;
        } else {
          dic[chars[i]]=1
        }
    }
  
    arr = [];
    for (item in dic){
      if (dic[item] < 2) {
        arr.push(item)
      } else {
        arr.push(item, dic[item]);
      }
    }  
  console.log(arr)  
  return arr.length;
  }
  
  console.log(compress(["a","a","b","b","c","c","c"]))
  console.log(compress(["a"]))