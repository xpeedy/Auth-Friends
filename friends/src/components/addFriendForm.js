import React, { useState } from "react";
// import axios from "axios";
import {useHistory} from "react-router-dom"
import { axiosWithAuth } from "../utils/axiosWithAuth";


const initialState = {
    id:Math.random(),
    name: "",
    age: "",
    email: "",
}

const FriendForm = () => {
    const [ values, setValues ] = useState(initialState)
    const {push} = useHistory()

    const handleChanges = (evt) => {
        setValues({...values,[evt.target.name]: evt.target.value})
    }
    const submit = (evt) => {
        evt.preventDefault()
        const newFriend = {...values}
        axiosWithAuth()
        .post("http://localhost:5000/api/friends", newFriend)
        .then(res => {
            push("/friendList")
            console.log(res)
        })
       
    }

    return(
        <>
        <form onSubmit={submit}>
            <label htmlFor="name">Name 
                <input 
                type="text" name="name" value={values.name} onChange={handleChanges}
                />
            </label>
            <br/>
            <label htmlFor="age">Age
                <input 
                type="text" name="age" value={values.age} onChange={handleChanges}
                />
            </label>
            <br/>
            <label htmlFor="email">Email
                <input 
                type="text" name="email" value={values.email} onChange={handleChanges}
                />
            </label>
            <br/>
            <button onSubmit={submit}>add friend</button>
        </form>
        </>
    )
}

export default FriendForm;