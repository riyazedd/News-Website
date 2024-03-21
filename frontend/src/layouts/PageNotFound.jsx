import React from 'react'
import { Link } from 'react-router-dom'
import HeaderComponent from './HeaderComponent'
import FooterComponent from './FooterComponent'

export default function PageNotFound() {
  return (
    <div>
      <HeaderComponent />
      <div className=' container mt-5'>
        <h1 className='mb-2'>404 Page Not Found</h1>
        <Link to="/" className='btn btn-primary mt-3'>Go To Home</Link>
        <FooterComponent />
      </div>
    </div>
  )
}
