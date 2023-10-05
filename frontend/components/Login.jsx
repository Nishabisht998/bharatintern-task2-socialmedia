import React from 'react'
import * as Yup from 'yup';
import { NavLink, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik';
// import toast from 'react-hot-toast';
import Swal from 'sweetalert2';

const loginSchema = Yup.object().shape({
 username: Yup.string().required('Required'),

  password: Yup.string().required('Password is Required')
});

const Login = () => {
  const navigate = useNavigate();
 const loginForm= useFormik({
  initialValues:{
    username:'',
    password:'',

  },
  onSubmit:async(values)=>{
    console.log(values);
    const res = await fetch('http://localhost:5000/user/authenticate', {
      method: 'POST',
      body: JSON.stringify(values),
      headers: { 'Content-Type': 'application/json' }
    });
    console.log(res.status);

    if (res.status === 200) {
      Swal.fire({
        icon: 'success',
        title: 'Login Success'

      })
      navigate('/home');
    }


    else if (res.status === 401) {
      Swal.fire({
        icon: 'error',
        title: 'error',
        text: 'page not found'
      })
    }
    else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Something went wrong'
      })
    }
  },
validationSchema:loginSchema
 });

 
  return (
    <div>
      <div className="row vh-100  " style={{justifyContent:"center",alignItems:'center'}}>
        <div className="col-md-3 mx-auto">
          <div className="card shadow   p-5">
          <div className='text-center mb-3'>
            <i class="fa-brands fa-instagram fa-2xl"></i>
            </div>
         
              <form onSubmit={loginForm.handleSubmit}>

                <span className='span-text'>{loginForm.touched.username && loginForm.errors.username}</span>
                <input onChange={loginForm.handleChange}
                value={loginForm.values.username}  
                name='username'
                className="form-control mb-2"
                 placeholder="username"
                 type="text"  />
                <span className='span-text'>{loginForm.touched.password && loginForm.errors.password}</span>
                <input 
                onChange={loginForm.handleChange}
                value={loginForm.values.password}
                name='password'
                  className="form-control mb-2"
                   placeholder="password"
                   type="password" />
                <button type="submit" className="btn btn-primary w-100">Log In</button>
                <p className="small  mt-4  d-flex">
                  Don't have an account?
                  <NavLink className="navlink  fw-bold  px-1  " style={{color:"red",fontSize:15}} to="/signup">Signup</NavLink>
                </p>
              </form>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Login