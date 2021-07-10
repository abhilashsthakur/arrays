function google(givenArray,num){
	console.log('Given Number is', num)
    console.log(givenArray)

    var duplicate=givenArray;
    console.log(duplicate)

    for(var i=0;i<givenArray.length;i++){

    for(var j=0;j<givenArray.length;j++){

        if((givenArray[i]+duplicate[j])===num){
            console.log(true)
        }
        
    }
    }
}
google([10,15,3,7],17)