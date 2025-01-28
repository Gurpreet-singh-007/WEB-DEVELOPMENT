import { useEffect, useState } from "react";


function App(){

    const [currentHeight , setCurrentHeight] = useState(window.innerHeight) ;

    const [currentWidth , setCurrentWidth] = useState(window.innerWidth) ;


    useEffect(function(){
        function handleResize(){
            setCurrentHeight(window.innerHeight) ;
            setCurrentWidth(window.innerWidth) ; 
        }

        window.addEventListener('resize' , handleResize);

        return function(){
            window.removeEventListener('resize' , handleResize)
        }
    },[])
    
    
    return(
        <div>
            <div> Browser window's Height = 
            <span>
            {currentHeight}
            </span>
            </div>


            <div> Browser window's width = 
            <span>
            {currentWidth}
            </span>
            </div>

        </div>
    )
    
}

export default App ;



// Variation 1 -> Runs on every render ;
// useEffect( function (){
//     console.log("UI Rendered ");
// })

// Variation 2 -> Runs on the first render only
// useEffect( () => {
//     console.log("UI Rendered ");
// }, [])

// Variation 3 -> Runs on the first render and at any dependency change(text in this case) ;
// useEffect( () => {
//     console.log("UI Rendered ");
// }, [text])

// Variation 4-> to handle unmounting of a component ;
// useEffect( () => {
//     console.log("listener added ");
//     return function(){
//         console.log('listener removed')
//      }
// })