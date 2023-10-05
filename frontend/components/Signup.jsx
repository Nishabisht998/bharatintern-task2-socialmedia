import { useFormik } from 'formik';
import React from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

const signupSchema= Yup.object().shape({
 email:Yup.string().email('invalid email').required('required'),
 username: Yup.string().required('enter valid username'),
 password:Yup.string().required('password')

});



const Signup = () => {
  const navigate = useNavigate();
  const signForm=useFormik({
    initialValues:{
      email:'',
      username:'',
      password:''
    },
    onSubmit:async(values)=>{
      console.log(values);
      const res=await fetch('http://localhost:5000/user/add',{
        method:'POST',
        body:JSON.stringify(values),
        headers:{
          'Content-Type':'application/json'
        }

      });
      console.log(res.status);

      if(res.status === 200){
        toast.success('signup successfully!')

        navigate('/');
      }else{
        toast.error("signup failed")
      }

    },
    validationSchema:signupSchema

  })
  return (
    <div>
      <div className="row vh-100 " style={{justifyContent:"center",alignItems:'center'}}>
        <div className="col-md-3 mx-auto">
          <div className="card shadow  p-5 ">
            <div className='text-center mb-3'>
            <i class="fa-brands fa-instagram fa-2xl"></i>
            </div>
           <form onSubmit={signForm.handleSubmit} >
           <span className='span-text'>{signForm.touched.email && signForm.errors.email}</span>

           <input onChange={signForm.handleChange} value={signForm.values.email} name='email'
           className='form-control mb-2' 
           type="email"
            placeholder='email' />
            <span className='span-text'>{signForm.touched.username && signForm.errors.username}</span>
           <input className='form-control mb-2' type="text" placeholder='username' onChange={signForm.handleChange} value={signForm.values.username} name='username'/>
           <span className='span-text'>{signForm.touched.password && signForm.errors.password}</span>
           <input className='form-control mb-2' type="password" placeholder='password' onChange={signForm.handleChange} value={signForm.values.password} name='password'/>
<button type="submit" className='btn btn-primary w-100'> Signup</button>
           </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup