import React from 'react';
import {Outlet} from 'react-router-dom';
import { Link } from 'react-router-dom';
import "../css/admin.css";

export default function AdminRouteMiddleware() {
  return (
    <div className='admin'>
        <div className='top-header'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-md-3'>
                <h1>News Website</h1>
              </div>
              <div className='col-md-9'>
                <div className='logout'>
                  <button className='btn btn-danger float-end'>Logout</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='aside-section'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-md-12'>
                <div className='profile-container mt-3'>
                  <div className='profile-img'>
                    <img src="https://picsum.photos/200" />
                  </div>
                  <div className='profile-name'>
                    <h3>Admin</h3>
                  </div>
                </div>
              </div>
              <div className="col-md-12 mt-5">
                <ul className='nav flex-column'>
                  <li className="nav-item">
                    <Link to="" className="nav-link">Dashboard</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="" className="nav-link">Users</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='main-section'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12'>
                <Outlet />
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
