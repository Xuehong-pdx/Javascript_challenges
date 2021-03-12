function sym(...args) {
  
  newArr=[]
  for (i=0; i<args[0].length; i++) {
    if (!(newArr.includes(args[0][i]))) {
      newArr.push(args[0][i])
    }
  }
  for (i=1; i<args.length; i++) {
    for (j=0; j<args[i].length; j++) {
      if (!(newArr.includes(args[i][j]))) {
        newArr.push(args[i][j])
      }
      else {
        newArr= newArr.filter(item => item !==args[i][j])
      }
    }
  }
  return newArr.sort(); 
}

out1 = sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]);
console.log('out1= ', out1);

out2 = test([1, 2, 3, 3], [5, 2, 4, 6]);
console.log('out2= ', out2);
