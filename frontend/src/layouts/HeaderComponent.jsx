import React from 'react'
import { Link } from 'react-router-dom'

export default function HeaderComponent() {
  return (
    <div>
      <ul className='nav'>
            <li className='nav-item'><Link to="/" className='nav-link'>Home</Link>{"\t"}</li>
            <li className='nav-item'><Link to="/about" className='nav-link'>About</Link>{"\t"}</li>
            <li className='nav-item'><Link to="/contact" className='nav-link'>Contact</Link>{"\t"}</li>
            <li className='nav-item'><Link to="/news" className='nav-link'>News</Link>{"\t"}</li>
      </ul>
            
    </div>
  )
}
