import React,{useEffect, useState} from 'react'
import API from '../../API'
import Table from 'react-bootstrap/Table';


export default function CategoryComponent() {
    const [category,setCategory]=useState([]);
    useEffect(()=>{
        API.get('/category').then(res=>{
            setCategory(res.data);
        }).catch(err=>{
            console.log(err);
        })
    })
  return (
    <div>
        <h1>Category</h1>
        <Table striped bordered hover>
        <thead>
            <tr>
                <th>S.N</th>
                <th>Name</th>
            </tr>
        </thead>
        <tbody>
            {category && category.map((cat,index)=>(
            <tr key={index}>
                <td>{++index}</td>
                <td>{cat.name}</td>
            </tr>
        ))}
        </tbody>
      </Table>
    </div>
  )
}
