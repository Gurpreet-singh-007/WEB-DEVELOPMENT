
// import React from 'react' ;

import './ProductDate.css' ;

function ProductDate(props){

    const month = props.date.toLocaleString('en-US' , {month : 'long'}) ;
    const day = props.date.toLocaleString('en-US' , {day : '2-digit'}) ;
    const year = props.date.getFullYear() ;

    return (
        <div className='date-container'>
            <div> {day} </div>
            <div> {month} </div>
            <div> {year} </div>
        </div>
    );
};

export default ProductDate ;