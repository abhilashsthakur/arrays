// Sorting of the given array

const array=[{userId:1},{userId:2},{userId:3},{userId:1},{userId:1},{userId:2},{userId:2}]

function sortObjects(arr)
{
    return myArr=arr.sort((a,b)=>{
            if(a.userId>b.userId) 
            return 1 
            else return  -1 
    })
    
}



// Finding the occurence object in the array

function countObjects(arr){

    var count1=0;
    var count2=0;
    var count3=0;

   arr.forEach((element)=>{
       if(element.userId===1)  return count1++
       if(element.userId===2)  return count2++
       if(element.userId===3) return count3++
    });
    console.log("Count of 1 :"+count1 +" || " + "Count of 2 : "+ count2 + " || " + " Count of 3 : "+ count3)
}


function call(){
    console.log(sortObjects(array))
    countObjects(array)
}

call()