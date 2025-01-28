import { useState } from 'react';
import './App.css';

function App() {

  // const [firstName , setFirstName] = useState('') ;
  // const [lastName , setLastName] = useState('') ;


  // console.log(firstName , lastName) ;
  // function changeFirstNameHandler(e){
  //   // console.log("Printing First Name" , e.target.value) ;
  //   setFirstName(e.target.value) ;
  // }

  // function changeLastNameHandler(e){
  //   // console.log("Printing Last Name= ",e.target.value) ;
  //   setLastName(e.target.value) ;
  // }

  const [formData , setFormData] = useState(
    {
      firstName:'' ,
      lastName: '' ,
      email: '' ,
      comments:'' ,
      isVisible: true,
      mode : 'Offline Mode',
      favCar:''
    }
  )

  function changeNameHandler(e){
    const {name , value , checked , type} = e.target ;
    setFormData(prevFormData => {
      return {
        ...prevFormData ,
        [name]: type === 'checkbox' ? checked : value 
      }
    })
  }

  function submitHandler(e){
    e.preventDefault();
    console.log("Finally the form Data is", formData)
  }
  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <input type='text' placeholder='Enter your FirstName' onChange={changeNameHandler} name='firstName'
        value={formData.firstName}

        />
        <br>
        </br>
        <input type='text' placeholder='Enter your LastName' onChange={changeNameHandler} name='lastName'
        value={formData.lastName}

        />
        <br>
        </br>
        <input type='email' placeholder='Enter your Email' onChange={changeNameHandler} name='email'
        value={formData.email}

        />
        <br>
        </br>
        <textarea
          placeholder='Enter your comment here'
          onChange={changeNameHandler}
          name='comments' 
          value={formData.comments}
          rows={3}
        />
        <br>
        </br>
        <input
          type='checkbox'
          name='isVisible'
          id='isVisible'
          onChange={changeNameHandler}
          checked={formData.isVisible}
        />
        <label
          htmlFor='isVisible'
        >
          Am I Visible
        </label>

        <br>
        </br>
         <input
          type='radio'
          name='mode'
          id='Online Mode'
          value='Online Mode'
          onChange={changeNameHandler}
          checked={formData.mode === 'Online Mode'}
         />
         <label htmlFor='Online Mode'>Online Mode</label>


         <input
          type='radio'
          name='mode'
          id='Offline Mode'
          value='Offline Mode'
          onChange={changeNameHandler}
          checked={formData.mode === 'Offline Mode'}
         />
         <label htmlFor='Offline Mode'>Offline Mode</label>


        <br></br>
        <label htmlFor='favCar'>Your Fav Car</label>
        <select
        onChange={changeNameHandler}
        name='favCar'
        id='favCar'
        value={formData.favCar}
        >

          <option value="BMW">BMW</option>
          <option value="Audi">Audi</option>
          <option value="Ferrari">Ferrari</option>
          <option value="Mercedes">Mercedes</option>
          <option value="Lambo">Lambo</option>
        </select>

          <button>SUBMIT</button>
      </form>
    </div>
  );
}

export default App;
