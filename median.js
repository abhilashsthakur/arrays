// Input: arr1 = [1,2], arr1 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
const median=(arr1,arr2)=>{


    var mergeArray=arr1.concat(arr2)
    console.log(mergeArray)
    var length=mergeArray.length
   
    var half=length/2

    var h=Math.floor(half)
   
    if(length%2===0)
    {
        
        var result=(mergeArray[half]+mergeArray[half-1])/2
        return result
        
    }
    else{
        
        return mergeArray[h]
        
    }
}
console.log("Median is :"+" "+ median([1,2], [3,4]))
console.log("Median of [], [3,4] is  :"+" "+ median([], [3,4]))
console.log("Median of [0,0], [0,0] is :"+" "+ median( [0,0], [0,0]))