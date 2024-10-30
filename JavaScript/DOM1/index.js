//Window = (It is an global object which represents the browser window.)
//BOM = Broswer object model (It allows js to communicate to browser about matters other than content(html doc) of the page)
//DOM = document object model (Converting a doc(html doc) into an object is known as DOM)
//( tage(html) -> tokens(by tokenizer) -> nodes -> DOM)



//Acessing elements by 
//Method 1
// let a = document.getElementById('heading') ;
//Called on object model , returns a single object.
//document.getelementsbyclassname , document.getelementsbytagname...        //not an array (it is an object..)


//Method 2
// let b = Document.querySelector(.heading) ; 
// for multiple classes document.queryselectorAll('hidden') ;


//Updating /Modifying an existing element 

//Method 1
// .innerHTML (Get an element / all of its descendant HTML content) or (set an element's HTML content)
// syntax = variable_name.innerhtml         (used to manipulate the content of an element)

//Method 2
// .outerHTML (Gets an element / all of its descendant ) or(sets an element's HTML content)
// syntax = variable_name.outerhtml   (used to manipulate both the element and its content)

//Method 3 
// .textcontent (Same as .innerhtml(but shows tags inside an element as text) (gets and sets text inside elements ))
// syntax = variable_name.textcontent

//Method 4
// .innertext (same as .textcontent (but does not shows elements or tags whose display is hidden))
// syntax = variable_name.innertext

//Adding new element
// let content = document.queryselector('.class name);     //selecting classname and adding a variable to element
// let new-element = document.createelement('tag name');    //creating variable  which will add element in the outer element
// content.appendChild(new-element) ;                       //appending the element with outer element

//adding a new element with text inside it
// let content = document.queryselector('.class name);     //selecting classname and adding a variable to element
// let new-element = document.createelement('tag name');    //creating variable  which will add element in the outer element
// new-element.textcontent = "the content"  ;                   //adding text in the new element
// content.appendChild(new-element) ;                       //appending the element with outer element
// by this way the new element with content will be added in the ending of that class name .

// adding a new element in any position in an existing element
// let existingelement = document.queryselector('.classname');
// let newelement = existingelement.createelemen('tagname') ;
// newelement.textcontent ="abcd" ;
// existingelement.insertadjacentelement('beforebegin' , newelement) ;

//removing element when parent is known
// let parentelement = queryselector('.classname') ;
// let childelement= queryselector('.classname') ;
// parentelement.remove(childelement) ;

//removing element when parent is unknown
// let childelement  = queryselector('classname') ;
// childparent.remove(childelement) ;

//styling with css
//Method 1
//.style (styles one property of an element)

//Method 2
//.csstext (used with .style to style more than one property )

//Method 3
//.setattribute (removes previous styling done in console and appends the new one)

//Method 4 
// .className()




