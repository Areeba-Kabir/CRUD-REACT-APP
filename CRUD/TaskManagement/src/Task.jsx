import {React, useEffect, useState} from 'react'
import axios from 'axios'
const [tasks, setTasks]=useState([])

useEffect(()=>{{
  axios.get('http://localhost:3001')
  .then(result => setTasks(result.data))
  .catch(err => console.log(err))
}},[])

const handleDelete= (id) =>{
  axios.delete('http://localhost:3001/deleteTask/'+id)
  .then(res => {console.log(res)
  window.location.reload()
  })
  .catch(err => console.log(err))
}

function Task() {
  return (
    <>
    <div className="d-flex vh-100 bg-dark justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <Link to="/create" className="btn btn-danger">Add +</Link>
        <table className="table">
          <thead>
            <tr>
                <th> Title </th>
                <th> Description</th>
                <th> Status </th>
                <th> Action </th>
            </tr>
          </thead>
          <tbody>
            {
                tasks.map((tasks)=>{
                    return <tr>
                        <td>{tasks.title}</td>
                        <td>{tasks.description}</td>
                        <td>{tasks.status}</td>
                        <td>
                            <Link to={`/update/${tasks._id}`} className="btn btn-success">Update +</Link>
                            <button className="btn btn-danger" 
                            onClick={(e)=>handleDelete(tasks._id)}>Delete</button>
                        </td>
                    </tr>
                })
            }
          </tbody>
        </table>
      </div>
    </div>
    </>
  )
}

export default Task

