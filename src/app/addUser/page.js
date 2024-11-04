'use client'
import React, { useState } from 'react'
import './style.css'

const AddUser = () => {
    const [name,setName]=useState('');
    const [age,setAge]=useState('');
    const [state,setState]=useState('');

    const adduser=async()=>{
        console.log(name+" "+age+" "+state);
        let response=await fetch('http://localhost:3000/api/users',{method: 'POST',body: JSON.stringify({name,age,state})});
        response=await response.json();
        alert(response.result);
    }

  return (
    <div>
        <h1>Add User</h1>
        <h2>Enter User Data</h2>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Name'/>
        <br/>
        <input type="text" value={age} onChange={(e)=>setAge(e.target.value)} placeholder='Age'/>
        <br/>
        <input type="text" value={state} onChange={(e)=>setState(e.target.value)} placeholder='state'/>
        <br/>
        <button onClick={adduser}>Add User</button>
    </div>
  )
}

export default AddUser;