import React, { useEffect, useState } from 'react'
import API from '../../API'


export default function AddNewsComponent() {
  const [categoryId, setCategoryId] = useState("");
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [summary, setSummary] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const [category, setCategory] = useState("");


  const getCategory = () => {
    API.get('/category').then(res => {
      setCategory(res.data);
    }).catch(err => {
      console.log(err);
    })
  }

  useEffect(() => {
    getCategory();
  }, []);

  const insertNews = (e) => {
    e.preventDefault();
    let data = new FormData();
    data.append('categoryId', categoryId);
    data.append('title', title);
    data.append('slug', slug);
    data.append('summary', summary);
    data.append('description', description);
    data.append('image', image);
   
    API.post('/news', data).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    })
  }

  return (
    <div>
      <h1>Add News</h1>
      <form onSubmit={insertNews}>
        <div className="form-group mb-2 mt-2">
          <label htmlFor="">Category</label>
          <select name="" id="" className='form-control' onChange={(e) => setCategoryId(e.target.value)}>
            {category && category.map((cat, index) => (
              <option key={index} value={cat._id}>{cat.name}</option>
            ))}
          </select>
        </div>
        <div className="form-group mb-2 mt-2">
          <label htmlFor="">Title</label>
          <input type="text" className="form-control" onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="form-group mb-2 mt-2">
          <label htmlFor="">Slug</label>
          <input type="text" className="form-control" onChange={(e) => setSlug(e.target.value)} />
        </div>
        <div className="form-group mb-2 mt-2">
          <label htmlFor="">Summary</label>
          <input type="text" className="form-control" onChange={(e) => setSummary(e.target.value)} />
        </div>
        <div className="form-group mb-2 mt-2">
          <label htmlFor="">Description</label>
          <input type="text" className="form-control" onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div className="form-group mb-2 mt-2">
          <label htmlFor="">Image</label>
          <input type="file" className="form-control" onChange={(e) => setImage(e.target.files[0])} />
        </div>
        <div className="form-group mb-2">
          <button className="btn btn-success">Add Category</button>
        </div>
      </form>
    </div>
  )
}
