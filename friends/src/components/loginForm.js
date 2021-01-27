import React, {useState} from "react";
import axios from 'axios';

import {useHistory} from "react-router-dom";

const initialState = {
    username: "",
    password: "",
}
const LoginForm = () => {
    const [ values, setValues ] = useState(initialState)
    const {push}= useHistory()
    const handleChanges = (evt) => {
        setValues({...values,[evt.target.name]: evt.target.value})
        console.log(values);
    }
    const handleSubmint =  (evt) => {
        evt.preventDefault();
        // console.log('this is values',values);
        axios.post('http://localhost:5000/api/login',values)
        .then((res)=>{
            localStorage.setItem("token",res.data.payload);
            push("/friendList")
            console.log(res)
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    return(
        <>
        <h2>Login Below</h2>
        <form onSubmit ={handleSubmint}>
            <label htmlFor="username">
                <input 
                type="text" 
                name="username" 
                value={values.username} 
                onChange={handleChanges}
                placeholder='Username'
                />
            </label>
            <br/>
            <label htmlFor="password">
                <input 
                type="password"
                 name="password" 
                 value={values.password} 
                 onChange={handleChanges}
                 placeholder="password"
                />
            </label>
            <br/>
            <button>Login</button>
        </form>
        </>
    )
}
export default LoginForm