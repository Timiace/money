const grade=prompt("your score")

if(grade >=70 && grade <100){
    alert("A")
}else if(grade >=60 && grade <69){
    alert("B")
}else if(grade >=50 && grade <59){
    alert("C")
}else if(grade >=40 && grade <49){
    alert("D")
}else if(grade >=30 && grade <39){
    alert("E")
}else if(grade <=29 ){
    alert("F9")
}else{
    alert("you are not eligible for this program")
}
function greet(user = 'customer'){
    console.log( 'welccome'+ user)
}
greet( 'cyril')

function addNum(num1, num2){
    let sum = num1 + num2

    return sum
}
console.log(addNum(23, 45))