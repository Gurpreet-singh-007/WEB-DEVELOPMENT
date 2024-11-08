import './card.css' ;

function Card(props){
    return <div className={props.cname}>{props.children}</div> ;
}

export default Card ; 