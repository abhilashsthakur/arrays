// If given array length is even: [a,b,c,d]=>median= (b+c)/2
// If given array length is odd: [a,b,c,d,e]=>median= c
const median=(arr1,arr2)=>{


    var mergeArray=arr1.concat(arr2)
    var sortedArray=mergeArray.sort()
    console.log(sortedArray)
    var length=sortedArray.length
   
    var half=length/2

    var h=Math.floor(half)
   
    if(length%2===0)
    {
        
        var result=(sortedArray[half]+sortedArray[half-1])/2
        return result
        
    }
    else{
        
        return sortedArray[h]
        
    }
}
console.log("Median is :"+" "+ median([2,1], [3,4]))
// console.log("Median of [], [3,4] is  :"+" "+ median([], [3,4]))
// console.log("Median of [0,0], [0,0] is :"+" "+ median( [0,0], [0,0]))