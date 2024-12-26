
// import Card from "./Card" ;
import { useState } from "react" ;
import ProductDate from "./ProductDate" ;
import './ProductsItem.css' ;

function ProductItem(props){

    const[title,setTitle] = useState(props.title) ;

    function ClickHandler(){
        console.log("Button Clicked");
        setTitle("Popcorn") ;
    }
    return(
        <div className='container'>
            <div className='cards'>
                <ProductDate  date = {props.date} /> 
                <h2 > {title} </h2> 
                <button onClick={ClickHandler}> Add To Cart </button>
            </div>
        </div>
    )
}

export default ProductItem ;