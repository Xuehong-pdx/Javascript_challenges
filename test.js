/* Check whether there exists an element in the array such that 
sum of elements on its left is equal to the sum of elements on its 
right. */

function balancedSums(arr) {
    if (arr.length===1){
        return 'YES'
    } else if (arr.length===2) {
        return 'NO'
    } else {
        for (i=1; i<arr.length-1; i++) {
            left = arr.slice(0,i)
            right = arr.slice(i+1, arr.length)
            leftSum = left.reduce((sum, x) => sum +=x)
            rightSum = right.reduce((sum, x) => sum +=x)
            if ( leftSum === rightSum){
                return 'YES';
            }
        }
        return 'NO';
    }
}

console.log(balancedSums([1,1,4,1,1]))
