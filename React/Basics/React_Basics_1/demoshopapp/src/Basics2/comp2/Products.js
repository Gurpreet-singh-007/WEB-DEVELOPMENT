import './Products.css' ;
import ProductItem from './ProductsItem';
// import Card from './Card' ; 

function Products(props){
    return(

        <div>
        
            <ProductItem 
                title = {props.items[0].title}
                amount ={props.items[0].amount}
                date = {props.items[0].date}
            />
            <ProductItem 
                title = {props.items[1].title}
                amount ={props.items[1].amount}
                date = {props.items[1].date}
            />
            <ProductItem 
                title = {props.items[2].title}
                amount ={props.items[2].amount}
                date = {props.items[2].date}
            />

        </div>

    )
}

export default Products ;