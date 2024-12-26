
import './App.css' ; 
import Products from "./comp2/Products";
import NewForm from './comp2/ProductForm';

function App(){

    const products =[
        {
            id :1 ,
            title : "Nirma" ,
            amount : 450 ,
            date : new Date(2024 , 5 ,5) ,
        } ,
        {
            id :2 ,
            title : "Surfexcel" ,
            amount : 50 ,
            date : new Date(2024 , 2  , 10),
        } ,
        {
            id :3 ,
            title : "Tide" ,
            amount : 40 ,
            date : new Date(2024 , 12 ,31) ,
        } ,
    ] ;


    function FormHandler(data){
        console.log("INside app.js");
        console.log(data);
    }


    return (
        <div>
            <NewForm Formdata={FormHandler} />  
            <div className='wrapper'>
                <Products  items={products} />
            </div>
        </div>

    )

}

export default App ;