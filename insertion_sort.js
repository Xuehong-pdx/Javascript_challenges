function insertionSort(arr) {
    /* Compare the current element (key) to its predecessor. If 
    key is smaller, compare it to the elements before. Move the 
    greater elements one position up to make space for the 
    swapped element */
    for (i=0; i<arr.length; i++){
      for (j=0; j<i; j++){
        if (arr[j] > arr[i]){    
          x=arr[j]
          arr[j] = arr[i]
          arr[i] = x
        }
      }
    }
  return arr;
  }
  
  out = insertionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);
  console.log(out)