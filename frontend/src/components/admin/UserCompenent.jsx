import React,{useEffect, useState} from 'react'
import API from '../../API'
import Table from 'react-bootstrap/Table';

export default function UserCompenent() {
    const [users,setUsers]=useState([]);
    useEffect(()=>{
        API.get('/users').then(res=>{
            setUsers(res.data);
        }).catch(err=>{
            console.log(err);
        })
    },[])
  
    return (
    <div>
      <h1>User List</h1>
      <Table striped bordered hover>
        <thead>
            <tr>
                <th>S.N</th>
                <th>Name</th>
                <th>Email</th>
                <th>Gender</th>
                <th>Role</th>
                <th>Image</th>
            </tr>
        </thead>
        <tbody>
            {users && users.map((user,index)=>(
            <tr key={index}>
                <td>{++index}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.gender}</td>
                <td>{user.role}</td>
                <td><img src={user.image} width="80" alt="" /></td>
            </tr>
        ))}
        </tbody>
      </Table>
    </div>
  )
}
