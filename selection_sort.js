function selectionSort(arr) {
  /* selecting the minimum value,swapping it with the first 
  value, then starts at the second position, continues 
  iterating and swapping elements until it reaches the end.*/
  for (i=0; i<arr.length; i++) {
    min = Math.min(...arr.slice(i+1, arr.length))
    const isMin = item => item === min;
    idx = arr.findIndex(isMin)
    if (min<arr[i]){
      arr[idx] = arr[i]
      arr[i] = min
    }
  }
  return arr;
}

out = selectionSort([8, 2, 4, 1, 3, 9, 100, 50]);
console.log(out)