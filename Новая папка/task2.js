function firstLetter(str){
    let newArr = str.split(' ').map(str => str[0]);
    newArr.filter(function (){
        return str.length > 0;
    })
    console.log(newArr)
}
firstLetter("Каждый охотник желает знать, где сидит фазан.")