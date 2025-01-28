import React, { useState } from 'react';
import './App.css'

const App = () => {

    const [formData , setFormData] = useState(
        {
            firstName: '',
            lastName:'' ,
            email:'',
            address:'',
            city:'',
            state:'' ,
            zipCode:'' ,
            comments:true,
            candidates:true,
            offers:true,
            pushNotification:'everything'
        }
    )


    function changeHandler(e){
        const{name , value , type , checked} = e.target
        setFormData(prevFormData => {
            return{
                ...prevFormData,
                [name] : type ==="checkbox" ? checked : value  
            }
        })
    }
    
    const submitHandler = (e) => {
        e.preventDefault() ;
        console.log(formData) ;
    }
  return (
    <div className='container'>
       <form onSubmit={submitHandler} className='form'>

        <div className='input-field odd'>
            <label htmlFor='firstName'>First Name</label>
            <input
                type='text'
                name='firstName'
                id='firstName'
                placeholder='Pranay'
                onChange={changeHandler}
                value={FormData.firstName}
            />
        </div>

        <div className='input-field even'>
            <label htmlFor='lastName'>Last Name</label>
            <input
                type='text'
                name='lastName'
                id='lastName'
                placeholder='Gupta'
                onChange={changeHandler}
                value={FormData.lastName}
            />
        </div>

        <div className='input-field odd'>
            <label htmlFor='email'>Email address</label>
            <input
                type='email'
                name='email'
                id='email'
                placeholder='pgupta@duck.com'
                onChange={changeHandler}
                value={FormData.email}
            />
        </div>

        <div className='input-field even'>
            <label htmlFor='country'>Country</label>
            <select
            name='country'
            id='country'
            onChange={changeHandler}
            value={formData.coutry}
            >
                <option value='India'>India</option>
                <option value='USA'>USA</option>
                <option value='Canada'>Canada</option>
                <option value='Australia'>Australia</option>

            </select>
        </div>

        <div className='input-field odd'>
            <label htmlFor='address'>Street address</label>
            <input
                type='text'
                name='address'
                id='address'
                placeholder='1234 Main St'
                onChange={changeHandler}
                value={FormData.address}
            />

        </div>


        <div className='input-field even'>

            <label htmlFor='city'>City</label>
            <input
                type='text'
                name='city'
                id='city'
                placeholder='Asansol'
                onChange={changeHandler}
                value={FormData.city}
            />

        </div>


        <div className='input-field odd'>
            <label htmlFor='state'>State / Province</label>
            <input
                type='text'
                name='state'
                id='state'
                placeholder='West Bengal'
                onChange={changeHandler}
                value={FormData.state}
            />

        </div>


        <div className='input-field even'>
            <label htmlFor='zipCode'>ZIP / Postal code</label>
            <input
                type='text'
                name='zipCode'
                id='zipCode'
                placeholder='713301'
                onChange={changeHandler}
                value={FormData.zipCode}
            />
        </div>

        <div className='byemail'>
            <h3>By Email</h3>

            <div className='checkboxes'>
                <input
                    type='checkbox'
                    id='comments'
                    name='comments'
                    onChange={changeHandler}
                    checked={formData.comments}
                />

                <div>
                    <label htmlFor='comments'>Comments</label>
                    <p> Get notified when someones posts a comment on a posting.</p>
                </div>
            </div>

            <div className='checkboxes'>
                
                <input
                    type='checkbox'
                    id='candidates'
                    name='candidates'
                    onChange={changeHandler}
                    checked={formData.candidates}
                />

                <div>
                    <label htmlFor='candidates'>Candidates</label>

                    <p>Get notified when a candidate applies for a job.</p>
                </div>
            </div>

            <div className='checkboxes'>
                
            <input
                type='checkbox'
                id='offers'
                name='offers'
                onChange={changeHandler}
                checked={formData.offers}
            />

            <div>
                <label htmlFor='offers'>Offers</label>
                <p>Get notified when a candidate accepts or rejects an offer.</p>
                </div>
            </div>
        </div>


        <div className='push-notification'>
            <h3>Push Notifications</h3>
            <p>These are delivered via SMS to your phone.</p>


            <div className='push-notifications'>
                <input
                    type='radio'
                    id='everything'
                    value='everything'
                    name='pushNotification'
                    onChange={changeHandler}
                    checked={formData.pushNotification === 'everything'}
                />
                <label htmlFor='everything'>Everything</label>
            </div>

            <div className='push-notifications'>
                <input
                    type='radio'
                    id='sameasemail'
                    value='sameasemail'
                    name='pushNotification'
                    onChange={changeHandler}
                    checked={formData.pushNotification ==='sameasemail'}
                />
                <label htmlFor='sameasemail'>Same as email</label>
            </div>

            <div className='push-notifications'>
                <input
                    type='radio'
                    id='nopush'
                    value='nopush'
                    name='pushNotification'
                    onChange={changeHandler}
                    checked={formData.pushNotification ==='nopush'}
                />
                <label htmlFor='nopush'>No push notifications</label>
            </div>
        </div>






        <button>Save</button>
       </form>
    </div>
  )
}

export default App
