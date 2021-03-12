function quickSort(arr) {
  /* select a random element as the pivot. Reorder the list so 
  that all elements less than the pivot element are placed 
  before the pivot and all elements greater than the pivot are 
  placed after it (towards its right). Repeat */
  if (arr.length < 2) {
    return arr;
  }
  var pivot = arr[0];
  var arr1 = arr.filter(num => num < pivot);
  var arr2 = arr.filter(num => num > pivot);
  return quickSort(arr1).concat(pivot, quickSort(arr2));
}
out = quickSort([4,8,5,3,1,9])
console.log(out)