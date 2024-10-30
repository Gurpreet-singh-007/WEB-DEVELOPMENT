console.log('hello world 3'); 

let d=true; //scope of let is within the curly braces it is created //re-declaration is not possible //updation is possible
console.log(d);

var b='lobe'; //can be used in everywhere in the js doc //re-declaration is possible. //updation is possible
console.log(b);

const c=9; //scope of cont is within the curly braces it is created //re-declaration is not possible //updation is not possible
console.log(c);

//arithmetic operator (+,-,*,/,**,%)
//pre/post inc/dec
//assignment operator ( = , += , -= , *= , /= , **= , %= )
//comparison operator( < , > ,  <= , => , ===(strict equality(check same value and same data type)), == (loose equality(checks value only)) , !== )
//ternary operator( condition?value1(true) : value2(false))
//logical operator(  AND(&&) , OR(||) , NOT(!) )
//bitwise operator( AND(&) , OR(|))
//operator precedence ()

//control statement(if else)
let marks=98;
if (marks>= 90){
    console.log('A');
}
else if (marks>= 80){
    console.log('B');
}
else if (marks>= 70){
    console.log('C');
}
else if (marks>= 60){
    console.log('D');
}
else{
    console.log('E');
}

//switch 
let num=2;
switch(num){
    case 1:console.log('A');
    break ;
    case 2:console.log('B');
    break ;
    case 3:console.log('C');
    break ;
    default: console.log('D');
}

//loops(Repeatation of task)
//for loop
for(let i = 0 ; i<=5 ; i++){
    console.log('walia ' + i);
}

//while loop
let i =5;
while(i >=0){
    console.log(i);
    i--;
}

//do while loop
let a=0;
do{
    console.log(a);
    a++;
}while(a < 3);

