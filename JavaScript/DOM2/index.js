// JavaScript Events =  Actions or Occurences that happen in the browser. They can be triggered by various user interactions or by the browser itself.
// Interface =  A set of method signatures that a class must implement.(Blueprint)
// Event Target = An interface which can be implemented by objects that can receive events and may have listeners(how that events reacts) for them.
// Methods in Event Target
// Creating an event target.
let event1 = document.querySelector('.head');
function func1(){
    alert('Dont Click on Hello World!!!!');
}
event1.addEventListener('click' , func1) ;

// Removing an eventlistener 
// 3 conditions for removal of eventlistener (same target( document in this case ) , same type (click on this case) , same function (func1 in this case))
// document.removeEventListener('click' ,func1) ;


// Event Object(information about the event)

let event2 = document.querySelector('.para');
event2.addEventListener('click' , function(a){
    console.log(a) ;
    //sends the event object in console
});


//Default Parameter
let link = document.querySelectorAll('a');
let thirdlink = link[2] ;
console.log(thirdlink);
thirdlink.addEventListener('click',function(a){
    a.preventDefault();
    //prevents the a(anchor tag) to load the link which is its default behaviour..
    console.log('maza ayaa');
});


//avoiding to many event listener

let newdiv = document.createElement('div') ;

newdiv.addEventListener('click' , function(event) {
    if(event.target.nodeName === "P"){
        console.log("Clicked on para" +event.target.textContent) ;
    }
});

for(let i=0 ; i<100 ; i++){
    let newp = document.createElement('p') ;
    newp.textContent = "this is para" + i ;
    
    newdiv.appendChild(newp) ;
}
document.body.appendChild(newdiv);

let element = document.querySelector('#wrapper') ;

element.addEventListener('click' ,function(event){
    if(event.target.nodeName === "P"){
        console.log('clicked');
    }
});

// nodeName returns the tag (in uppercase).
let v = document.querySelector('.all') ; 
console.log(v.nodeName) ;













































