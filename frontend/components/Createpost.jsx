import { useFormik } from 'formik';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Nav from './Nav';
const Createpost = () => {
    const navigate = useNavigate();
    const [selfile, setselfile] = useState('');

    const postfile=async(e)=>{
        var output=document.getElementById('output');
        output.src=URL.createObjectURL(e.target.files[0]);
        output.onload=function(){
            URL.revokeObjectURL(output.src)
        };
        if(!e.target.files) return;
        const file = e.target.files[0];
        setselfile(file.name);
        const fd = new FormData();
        fd.append('myfile', file);
    
        const res = await fetch('http://localhost:5000/util/uploadfile', {method : 'POST', body: fd});
    
        console.log(res.status)
        
        ;
    };
    const post=useFormik({
        initialValues:{
            username:'',
            caption:'',
            image:""
        },
        onSubmit:async(values)=>{
            values.image=selfile;
            console.log(values);
            const res= await fetch('http://localhost:5000/create/add',{
                method: 'POST',
        body: JSON.stringify(values),
        headers: { 'Content-Type': 'application/json' }

            })
            console.log(res.status);

            if(res.status===200){
                toast.success('Successfully posted!')
                navigate('/home')
            }
        },
    });


  return (
    
    <div className='create-post'>
        <Nav/>
    
        <h1 className='text-center'>create your post</h1>
        <div className="row vh-100" style={{justifyContent:"center",alignItems:'center'}}>
            <div className="col-md-3 mx-auto">
                <div className="card">

        <form className='details'onSubmit={post.handleSubmit}>
            <center>

            <img src="https://png.pngtree.com/png-vector/20190214/ourmid/pngtree-vector-gallery-icon-png-image_515223.jpg" alt=""  id='output' />
            </center>
            <input type="text" placeholder='username' className='form-control my-2' onChange={post.handleChange} value={post.values.username} name='username'  />
            <input type="file" accept='images/*' onChange={(e)=>{postfile(e)}} />
            <textarea  placeholder='write your caption' onChange={post.handleChange} value={post.values.caption} name='caption'  ></textarea>
           <div>
            <button type="submit" className='btn btn-danger w-100'>post</button>

           </div>
        </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Createpost