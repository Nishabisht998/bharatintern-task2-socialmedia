import React from 'react'
import image2 from "../photos/image2.jpg"
import i1 from "../photos/i1.jpg"
import i2 from "../photos/i2.jpg"
import i4 from "../photos/i4.jpg"
import i3 from "../photos/i3.jpg"
import i5 from "../photos/i5.jpg"
import i6 from "../photos/i6.jpg"
import i7 from "../photos/i7.jpg"
import i8 from "../photos/i8.jpg"
import Nav from './Nav'

const Profiledetails = () => {
  return (
    <div>
           <Nav/>
        <div className="pro">
            <div className="profile-frame">
                <div className="pro-pic">
                    <img src={image2} alt="" />
                </div>
                <div className="pro-data">
                    <h2 className='fw-bold'>Anupriya pandey</h2>
                    <p>here i am anupriya pandey <br />
                        student of  AMITY UNIVERSITY
                    </p>
                    <div className="pro-info d-flex ">
                        <p className='mx-2'>8 post</p>
                        <p  className='mx-2'>40 followers</p>
                        <p  className='mx-2'>4 following</p>
                    </div>
                </div>
            </div>
        </div>
<hr style={{width:'90%', margin:'25px auto'}}/>
        <div className="gallery container">
            <img src={i1}alt="" srcset="" />
            <img src={i2}alt="" srcset="" />
            <img src={i3}alt="" srcset="" />
            <img src={i4}alt="" srcset="" />
            <img src={i5}alt="" srcset="" />
            <img src={i6}alt="" srcset="" />
            <img src={i7}alt="" srcset="" />
            <img src={i8}alt="" srcset="" />
        </div>

    </div>
  )
}

export default Profiledetails