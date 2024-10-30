console.log('Hello world!') ;

// API = Application Programming Interface
// Stablishes communication between various software components


// How to achieve concurrency in js(best way to add promises).
// let meraPromise = new Promise( function(resolve , reject){
//     setTimeout( function (){
//         console.log('mera promise') ;
//     } , 4000) ;
//     resolve(55) ;
//     // reject(new Error("Error aya hai bhai sahab"));
// }) ;

// // then method
// meraPromise.then(value => {console.log(value)} ,(error) =>{console.log("error hai ")} );



// let wada1 = new Promise(function(resolve , reject){
//     setTimeout(() => {
//         console.log('wada1 here') ;
//     }, 1000) ; 
//     resolve(true) ;
// }) ;

// let output = wada1.then(() =>{
//    let wada2 = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         console.log("wada2 here") ;
//     }, 5000);
//     resolve("wada2 resolved");
//    }) ;
//    return wada2 ;
// }) ;

// output.then((value) => {console.log(value)}) ;


// async await

// async function weather(){
//     let dm = new Promise(function(resolve, reject){
//         setTimeout(() => {
//             resolve("Delhi mei garmi hai") ;
//         }, 5000);
//     })
//     let hm = new Promise(function(resolve, reject){
//         setTimeout(() => {
//             resolve("hyderabad is cool") ;
//         }, 1000);
//     })

//     let delhiw = dm ;
//     let hyderabdw = hm ;

//     return[delhiw , hyderabdw] ;
// }

// weather() ;


//closures

function outer(){
    let a =5 ;
    function inner(){
        let a = 3 ;
        // console.log(a) ;
        function inner2(){
            let a = 7 ;
            // return a ;
            console.log(a) ;
            // function inner3(){
            //     console.log(a) ;
            // }
            // return inner3 ; 
        }
        return inner2 ;
    }
    return inner ; 
}

let b = outer() ;
let c = b() ;