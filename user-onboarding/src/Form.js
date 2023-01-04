import React, {useState} from "react";

const Form = (props) => {
    const {change, submitForm, errors} = props;
    const {username, email, password, tos} = props.values;
    const onSubmit = (e) => {
        e.preventDefault();
        submitForm();
    }
    const onChange = (e) => {
        const {name, value, checked, type} = e.target;
        const newVal = type === 'checkbox' ? checked : value;
        change(name, newVal);
    }
    return (
        <div>
            <h1>User Form</h1>
            <p>{errors.username}</p>
            <p>{errors.password}</p>
            <p>{errors.email}</p>
            <p>{errors.tos}</p>
            <form onSubmit={onSubmit}>
                <label>Username:
                    <input type='text' name='username' value={username} onChange={onChange} />
                </label>
                <label>Email:
                    <input type='email' name='email' value={email} onChange={onChange} />
                </label>
                <label>Password:
                    <input type='password' name='password' value={password} onChange={onChange} />
                </label>
                <label>ToS:
                    <input type='checkbox' name='tos' checked={tos} onChange={onChange} />
                </label>
                <input type='submit' value='Create Account' />
                
            </form>
        </div>
    )
}


export default Form;