function pairwise(arr, arg) {
    /*Given an array arr, find element pairs whose sum equal 
    the second argument arg and return the sum of their indices.*/
    count=0
    for (i=0; i<arr.length; i++){
      for (j=1; j<arr.length;j++){
        if (arr[i]+arr[j] === arg){
          count+=1;
          delete arr[i, j];
        }
        }
    }
    return count;
  }
  
  out = pairwise([1,4,2,3,0,5], 7);
  console.log(out)