//Objects(Data types that store collection of key - value pair.)
console.log('chaliye shuru karte hai')

// const rect={        //type of object(const)
//     length :1 , //property 1 of obeject
//     breadth : 1, //property 2 of obeject

//      draw: function(){
//         console.log('draw');
//      }      //behavior of obeject
// };


//Object Creation
//Factory Function
function createrect(length , breadth){
    return rect={
        length ,
        breadth ,
        area () {
            console.log(length*breadth);
        }
    };
};
//object creation from factory function
let a=createrect(2,5);
let b=createrect(5,9);

//Camelcase Notation(numberOfStudent)
//Constructor Function(Pascal Notations-first letter of every word is capital - NumberOfStudent)
function CreateRect1(length, breadth){
    this.length =length ;
    this.breadth =breadth ;
    this.area = Function() 
    {
        return (length*breadth);
    }
}

//Object Creation from constructor function
let c=new CreateRect1(1,1);


//dynamic nature of objects 
c.color='red' ; //adding property to object

delete c.color; //deleting property in object

//constructor property(return the refrence function of an object)
//funtion is also object

// Types in JS (primitive copy is made of data type )(Refrence points at the memory address of the data type)
//(Primitives are copied by their value ) & (Refrences are copied by their address/refrences).

//Iteration through objects
//for in 
let rectangle={
    l:2,
    b:8
};
for(let key in rectangle){
    console.log(key,rectangle[key]);
}

//for of
for(let key of Object.entries(rectangle)){
    console.log(key,rectangle[key]);
}

if('l' in rectangle){
    console.log('Present');
}
else{
    console.log('Absent');
}

//Object Cloning
//Iteration
let src={
    a:10,
    b:20
};
let dest={};
for(let key in src){
    dest[key]=src[key];
    console.log(key,dest[key]);
};

//Assign
let dest1 = Object.assign({},src);
console.log(dest1);

//Spread
let dest2 ={...src};
console.log(dest1);











// let z = false ;
// console.log(typeof(z));