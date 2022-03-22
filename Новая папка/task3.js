function changeArray(numbers){
    if(numbers.length % 2 == 0){
        let newArr1 = numbers.slice(0,numbers.length/2);
        let newArr2 = numbers.slice(numbers.length/2, numbers.length);
        newArr = [].concat(newArr2,newArr1)
    }else{
        let newArr1 = numbers.slice(0,numbers.length/2 );
        var newArr12 = numbers.slice(numbers.length/2, numbers.length/2 +1);
        let newArr2 = numbers.slice(numbers.length/2 +1, numbers.length);
        newArr = [].concat(newArr2,newArr12,newArr1)
    }

    console.log(newArr)

}
changeArray([ 1, 2, 3, 4, 5, 6, 7, 8]);