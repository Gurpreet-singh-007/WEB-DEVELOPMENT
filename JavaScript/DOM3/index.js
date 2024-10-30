// Performance now
// Reflow it is the process of calculating the dimensions and positions of page element.Computationally expensive task . 
// Repaint is process of drawing the pixels on the screen .Lesser of two evils .
// const t1 = performance.now();
// for(let i = 0 ; i<1000 ; i++ ){
//     let a = document.createElement('p') ;
//     a.textContent = 'This is para' + i ;

//     document.body.appendChild(a) ;
// };

// const t2 = performance.now() ;
// console.log(t2-t1) ;
// reflow is done 100 times here




// optimising a little bit
const t3 = performance.now();
// let ele = document.createDocumentFragment() ;
// for(let i = 0 ; i<10 ; i++ ){
//     let a = document.createElement('p') ;
//     a.textContent = 'This is para' + i ;

//     ele.appendChild(a) ;
// };
// document.body.appendChild(ele) ;
console.log('hello' ) ;
const t4 = performance.now() ;
console.log(t4-t3) ;
//Reflow is done 1 time here




// Call stack
// JS is a single threaded language (performs one command at a time)
// To - Do list for functions in your Program ( Follows last in, First out)

// Async code => call stack => browser => queue => call stack   Event loop 

