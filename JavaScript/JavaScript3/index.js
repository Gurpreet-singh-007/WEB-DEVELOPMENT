//InBuilt Objects in JavaScript(Provides additional Fucntionality for predefined Core Objects.)

//Math Object(Math.random(), Math.PI, Math.min, math.max)

//String Object
let lastName = 'Babbar' ;
lastName.valueOf

let firstname = new String ('love') ;

//This is template literal(can delimited multi line strings)
let randomString = `this            
is my f
irst msg
... 
${lastName}`

console.log(randomString);

//Date And Time Object
let date1= new Date()
console.log(date1);


//Arrays(Data structure that store data)
//Array creation
let numbers = [1,3,5,7];
console.log(numbers);

//Array insertion (End - push)
numbers.push(9);
console.log(numbers);
//Array insetion(Start - unshift)
numbers.unshift(8);
console.log(numbers);
//Array insertion(Middle - splice)
numbers.splice(2,0 ,'a' ,'b' ,'c' ,'d') ;

//Array searching( in primitives)
//Method 1
console.log(numbers.indexOf(7));    //bad practise
//Method 2
console.log(numbers.includes(3)) ;
//Method 3
console.log(numbers.indexOf(1,0));

//Array searching (in refrences)
//Call back Function( A function passed into other function as an argument , which is then invoked inside outer function to complete some kind of action)
let data = [
    {no:1 , name:'love'},
    {no:2 , name :'Rahul'}
]

let search = data.find(function (data){
    return data.name == 'love';
})
 console.log(search) ;

//Removing an element from an array 
let array1=[0,1,2,3,4,5,6,7,8,9];
// from start(shift)
array1.shift();
console.log(array1);
//from end(pop)
array1.pop();
console.log(array1);
//from middle(splice)
array1.splice(2,1) //splice(start deleting elements from this index, delete this much elements from array)

//Emptying an array
//Method 1
let array2=[0,1,2,3];
let array3= array2 
//array2 = [];      //by this method array dont empty bcoz array are refrences.
array2.length=0;
console.log(array2);
console.log(array3);
//Method 2
let array4=[0,1,2,3];
let array5= array2 
array4.splice(0,array4.length);
console.log(array2);
console.log(array3);

//Combining Arrays
let array6 =[0,1,2,3];
let array7 =[4,5,6,7];

let combarr= array6.concat(array7);
console.log(combarr) ;

//Slicing Arrays
let slicearr1 = combarr.slice(2) ;
console.log(slicearr1);
let slicearr = combarr.slice(2,7);
console.log(slicearr) ;

//Homework perform combining and slicing on refrences arrays......................................

//Spread operator
let combarr1 = [...array6, 'a' ,...array7 , true];
console.log('Spreaded array = ' ,combarr1) ;

//Iterating through an array
for(let value of combarr1){
    console.log(value) ;
}
combarr1.forEach(function(num){
    console.log(num) ;
});
//Joining arrays
const joined = combarr1.join(' ') ;
console.log('Joined array= ' , joined);

//Spliting arrays
const str ='This is my first string which is spliting &&& &&& 88899989898989899998889898989898';
let parts  = str.split(' ');
console.log( 'Splited array = ' , ...parts) ;

//Sorting arrays
let array8 = [ 9,7,5,4,8,3,1,2,0];
console.log('sorted array = ' ,array8.sort()) ;

//Reversing an array
console.log('Reversed array = ', array8.reverse());

//Filtering array
let evenfromarray8 = array8.filter(function(numbers){
    return numbers%2==0 ;
})
console.log('Filtered array = ' ,evenfromarray8) ;

//Mapping an array
let mappedarr = array8.map(function(num){
    return "student_no." + num ;
});
console.log( 'Mapped array =' , ...mappedarr) ;

//Mapping with other objects
let array9 = [0,1,2,3,4,5];
let filtered = array9.filter(num => num%2==0 );

let mapped = filtered.map(function(num){
    return obj = {value:num} ;
}); 
console.log(mapped);



