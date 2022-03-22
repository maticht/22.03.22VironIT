function currentSums(numbers){
    let newArr = [];
    numbers.reduce(function (a,b){
        newArr.push(a);
        return a + b;
    });
    console.log(newArr)
}
currentSums([2, 3, 5, 7, 11, 13, 17, 19])
                                                