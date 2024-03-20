import React from 'react'

export default function FooterComponent() {
    const date=new Date().getFullYear();
  return (
    <div>
      <footer className='footer'>
        <span className='text-muted'>All Rights Reserved {date} &copy; Riyaz Shrestha</span>
      </footer>
    </div>
  )
}
