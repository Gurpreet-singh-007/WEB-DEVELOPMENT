import './ProductForm.css' ;
import { useState } from 'react';


function NewForm(props){

    // const [ProductInfo , setProductInfo] = useState({
    //     title:'' ,
    //     date : '' 
    // })

    const [NewTitle , setTitle] = useState('') ;
    const [NewDate , setDate] = useState('') ;

    function TitleChangeHandler(event){
        setTitle(event.target.value) ;
    }
    function DateChangeHandler(event , previousState){
        setDate(event.target.value) ; 
    }

    function SubmitFormHandler(event){
        event.preventDefault() ;

        const productData = {
            title : NewTitle ,
            date : NewDate
        }

        props.Formdata(productData) ;
        
    }
    return (
        <div className='New_form'>
            <form onSubmit={SubmitFormHandler}>
                <div className='form-div'>
                    <label> Title </label>
                    <input type="text" onChange={TitleChangeHandler}></input>
                </div>
                <div className='form-div'>
                    <label> Date </label>
                    <input type="date" onChange={DateChangeHandler}></input>
                </div>
                <div className='form-div1'>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    )

}

export default NewForm ;