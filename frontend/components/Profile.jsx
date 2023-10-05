import React from 'react'
import { NavLink } from 'react-router-dom'
// import { NavLink } from 'react-router-dom'

const Profile = () => {
  return (
    <div  className='body'>
      <div className="image-name">
        
       <img src="https://www.freepnglogos.com/uploads/logo-ig-png/logo-ig-stunning-instagram-logo-vector-download-for-new-7.png " className='logo-image' alt="" />
<div>

  <NavLink to={'/login'} className="btn btn-primary mx-2">login</NavLink>
  <NavLink to={'/signup'} className="btn btn-dark mx-5">signup</NavLink>

</div>

       
      </div>

      <div className="content-profile vh-100">
       <h2>

        login your account
       </h2>
       <p>or</p>
       <h2>
        signup to create your new account
       </h2>

      </div>
      
    </div>
  )
}

export default Profile

