import React,{useEffect, useState} from 'react'
import API from '../../API'
import Table from 'react-bootstrap/Table';



export default function CategoryComponent() {
    const [category,setCategory]=useState([]);
    const [name,setName]=useState('');

    const insertCategory=(e)=>{
        e.preventDefault();
        let data={name:name};
        API.post('/category',data).then(res=>{
            console.log(res.data);
            getCategory();
            setName('');
        }).catch(err=>{
            console.log(err);
        })
    }

    const getCategory=()=>{
        API.get('/category').then(res=>{
            setCategory(res.data);
        }).catch(err=>{
            console.log(err);
        })
    }

    useEffect(()=>{
        getCategory();
    },[])
    
  return (
    <div>
        <h1>Category</h1>
        <form onSubmit={insertCategory}>
            <div className="form-group mb-2 mt-5">
                <label htmlFor="">Category Name</label>
                <input type="text" className="form-control" value={name} onChange={(e)=>setName(e.target.value)} />
            </div>
            <div className="form-group mb-2">
                <button className="btn btn-success">Add Category</button>
            </div>
        </form>

        <Table striped bordered hover className='mt-5'>
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
