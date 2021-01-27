import React, { useEffect, useState } from "react";
import {useHistory} from "react-router-dom"
// import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth";
// import FriendForm from "./addFriendForm";

const List = [{
    name:"",
    age:"",
    email:"",
}]

const FriendList = () => {
    const [list,setList] = useState(List)
    const {push} = useHistory();

    useEffect(() =>{
        axiosWithAuth()
        .get("http://localhost:5000/api/friends")
        .then(res => {
            setList(res.data)
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    },[])
    const submit = () => {
        push("/addfriend")
    }
    const logout = () => {
        localStorage.removeItem("token")
        push("/")
    }
    return(
        <>
        {list.map((element) => {
            return( <div><p>{element.name}</p>
                    <p>{element.age}</p>
                    <p>{element.email}</p>
                    </div>
                );
        })}
        <button onClick={submit}>Add a friend</button>
        <button onClick={logout}>Logout</button>
        </>
    )
}

export default FriendList;