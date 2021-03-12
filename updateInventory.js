function updateInventory(arr1, arr2) {
    items =[]
    for (a of arr1) {
      items.push(a);
    } 
   for (a of arr2) {
      if (items.includes(a)) {
        for (b of arr1) {
          if (b === a) {
            arr1[b] += arr2[b]
          }
        }
      }
      else {
        arr1.push(a)
      }
    }
    return arr1;
  }
  
  var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [58, "Microphone"]
  ];
  
  var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [30, "Bowling Ball"],
    [7, "Toothpaste"]
  ];
  
  out = updateInventory(curInv, newInv)
  console.table(out)