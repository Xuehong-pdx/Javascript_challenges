function bubbleSort(arr){
  /*Bubble sort
    From posiiton 0, compare the num(i) with num(i+1).  If num(i) > num(i+1),
   swap posiitons of num(i) and num(i+1). Repeat until the last number in the list 
   has been reached.   */
   
    for (i=0; i<arr.length; i++){
      for (j=i+1; j<arr.length; j++){
        if (arr[i] > arr[j]){
          x=arr[j]
          arr[j] = arr[i]
          arr[i] = x
        }
      }
    }
  
    return arr;
  }
  
  out = bubbleSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);
  console.log(out)