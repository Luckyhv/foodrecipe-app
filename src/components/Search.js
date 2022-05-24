import React, { useState } from 'react'
import './Search.css'
import {FaSearch} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

function Search() {
  const [input,setinput]=useState('')
  const navigate = useNavigate()
  const submit=(e)=>{
    e.preventDefault();
    navigate("/searched/"+ input)
    // setinput("")
  }
  return (
    <div className='formdiv'>
      <form action="" className='form1' onSubmit={submit}>
          <FaSearch/>
          <input type="text" name="" id="" className='input1' value={input} onChange={(e)=>setinput(e.target.value)} />
      </form>
    </div>
  )
}

export default Search
