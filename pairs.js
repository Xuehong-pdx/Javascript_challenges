//Given an array of numbers and a target value (k), determine the number of pairs of 
//array elements that have a difference equal to the target value. 

function pairs(k, arr) {
    count=0
    for (i=0; i<arr.length-1; i++) {
        for (j=i+1; j < arr.length; j++) {
            if(Math.abs(arr[i] - arr[j]) === k) {
                count += 1;
            };
        };
    };
    return count;
  }
  
  console.log(pairs(1, [1,2,3,4]))