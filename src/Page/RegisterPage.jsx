import React from 'react';
import { useDispatch } from 'react-redux';
import { registerThunk } from 'redux/phonebookReducer';






export default function RegisterPage() {

    const dispatch = useDispatch();
    const haldleSubmit = event =>{
        event.preventDefault();
        const formData = {
            name : event.currentTarget.elements.name.value,
            email: event.currentTarget.elements.email.value,
            password: event.currentTarget.elements.password.value,
        };
        console.log(formData);
        dispatch(registerThunk(formData));

    }

    return (

        <div>
            <h1>Зареєструйся, будь ласка</h1>
            <form onSubmit = {haldleSubmit}>
                <label>
                    name :
                    <input 
                    placeholder='Taras Shevchenko'
                    type='text'
                    name="name"
                    autoComplete='clear on escape'
                    required
                    >                        
                    </input>
                </label>

                <label>
                    email :
                    <input placeholder='shevchenko@mail.com' type='email' name="email">
                        {/* onChange={handleChangeName} */}
                        {/* autoComplete='clear on escape'
                            type="email"
                            name="name" */}
                        {/* id={nameInputId} */}
                        {/* value={name} */}
                        {/* required */}
                    </input>
                </label>

                <label>
                    password:
                    <input placeholder='examplepwd123' type='password' minLength={7}name="password">
                        {/* onChange={handleChangeName} */}
                        {/* autoComplete='clear on escape'
                            type="email"
                            name="name" */}
                        {/* id={nameInputId} */}
                        {/* value={name} */}
                        {/* required */}
                    </input>
                </label>

                <button type='submit'>registration</button>

            </form>
        </div>

    );
}
