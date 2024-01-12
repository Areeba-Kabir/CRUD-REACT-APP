

import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function CreateTask() {

    const [title, setName]=useState()
    const[description,setDescription]=useState()
    const[status,setStatus]=useState()
    const navigate=useNavigate()
  
    const Submit = (e) => {
      e.preventDefault();
      axios.post("http://localhost:3001/createTask",{title,description,status})
      .then(result => {
        console.log(result)
        navigate('/')
      })
      .catch(err => console.log(err))
    }
  
  return (
    <>
    <div className="d-flex vh-100 bg-dark justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={Submit}>
          <h2>Add Task</h2>
          <div className='mb-2'>
          <label htmlFor="" >Title </label>
          <input type="text" className='form-control' placeholder='Enter title'
          onChange={(e)=> setName(e.target.value)}/>
          
          </div>
          
          <div className='mb-2'>
          <label htmlFor="" >Description </label>
          <input type="text" className='form-control' placeholder='Enter Description for title'
          onChange={(e)=> setDescription(e.target.value)}/>
          </div>
          
          <div className='mb-2'>
          <label htmlFor="" >Status</label>
          <input type="text"  className='form-control' placeholder='Enter Status'
          onChange={(e)=> setStatus(e.target.value)}/>
          </div>
          
          <button className='btn btn-success'>Submit</button>
        </form>
      </div>
    </div>
    </>
  )
}

export default CreateTask


