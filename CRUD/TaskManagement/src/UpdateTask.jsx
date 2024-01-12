

import React, { useState, useEffect } from "react";
import { useParams,useNavigate } from 'react-router-dom';
import axios from 'axios';

function UpdateTask() {

    const {id} = useParams()
    const [title, setName]=useState()
    const[description,setDescription]=useState()
    const[status,setStatus]=useState()
    const navigate=useNavigate()

    useEffect(()=>{{
        axios.get('http://localhost:3001/getTask/'+id)
        .then(result => {console.log(result)
          setName(result.data.title)
          setDescription(result.data.description)
          setStatus(result.data.status)
        })
        .catch(err => console.log(err))
      }},[])

      const Update= (e) =>{
        e.preventDefault();
        axios.put("http://localhost:3001/updateTask/"+id,{title,description,status})
        .then(result => {
          console.log(result)
          navigate('/')
        })
        .catch(err => console.log(err))
      }
      

  return (
    <>
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={Update}>
          <h2>Update User</h2>
          <div className='mb-2'>
          <label htmlFor="" >Title </label>
          <input type="text" className='form-control' placeholder='Enter Title'
          value={title} onChange={(e)=> setName(e.target.value)}/>
          </div>
          
          <div className='mb-2'>
          <label htmlFor="" >Description </label>
          <input type="text" className='form-control' placeholder='Enter Description'
          value={description} onChange={(e)=> setDescription(e.target.value)}/>
          </div>
          
          <div className='mb-2'>
          <label htmlFor="" >Age </label>
          <input type="text"  className='form-control' placeholder='Enter Age'
          value={status} onChange={(e)=> setStatus(e.target.value)}/>
          </div>
          
          <button className='btn btn-success'>Update</button>
        </form>
      </div>
    </div>
    </>
  )
}

export default UpdateTask




