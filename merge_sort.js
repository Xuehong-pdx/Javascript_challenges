function mergeSort(arr) {
  /* Recursively split the input array in half until a 
  sub-array with only one element is produced. Merge each 
  sorted sub-array together to produce the final sorted array. */
  
  function merge(arr1, arr2){
    let merArr = []
    while (arr1.length>0 && arr2.length>0) {
      if (arr1[0] < arr2[0]) {
        merArr.push(arr1.shift());
      } else {
        merArr.push(arr2.shift());
      };
      return merArr.concat(arr1,arr2);
    } ;
  };

  if (arr.length < 2){
    return arr;
  } else {
    const mid = Math.floor(arr.length/2)
    const arr1 = arr.slice(0, mid)
    const arr2 = arr.slice(mid, arr.length)
    return merge(mergeSort(arr1), mergeSort(arr2));
  };
};

out = mergeSort([3, 4, 2, 1, 345, 123])
console.log(out)