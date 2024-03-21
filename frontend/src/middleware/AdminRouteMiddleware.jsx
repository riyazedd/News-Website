import React from 'react';
import {Outlet} from 'react-router-dom';
import "../css/admin.css";

export default function AdminRouteMiddleware() {
  return (
    <div className='admin'>
        <div className='top-header'>Top Header</div>
        <div className='aside-section'>Aside</div>
        <div className='main-section'><Outlet /></div>
    </div>
  )
}
