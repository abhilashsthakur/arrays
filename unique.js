// var a=[1,2,3,4,5]

// var b=[2,3,4,5,6]

const a = [1,2,3,4,5]
const b = [2,3,4,5,6]

const uniqe = (first, second) => {

   const myConcat=a.concat(b)
   
   return myConcat.filter(el => { return
   
      return !(a.includes(el) && b.includes(el));
   
   })

};
console.log(uniqe([1,2,3,4,5], [2,3,4,5,6])); //Expected output [1,6]