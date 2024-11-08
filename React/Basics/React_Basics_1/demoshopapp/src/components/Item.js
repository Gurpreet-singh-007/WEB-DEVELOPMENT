
import './Item.css' ;

function Item(props){
    const item =props.name ; 
    return( <p className="Item"> {item}</p>) ;
}

export default Item ;