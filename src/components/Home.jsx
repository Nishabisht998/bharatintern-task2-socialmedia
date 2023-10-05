import React, { useEffect, useState } from 'react'
import InputEmoji from 'react-input-emoji'
import avatar from '../photos/avatar.png'
import Nav from './Nav';

const Home = () => {
  const [post, setpost] = useState([]);
   const [ text, setText ] = useState('')

      function handleOnEnter (text) {
       

        console.log('enter', text)
        setComments([...comments,text])
      }
  const [comments, setComments] = useState([]); // State to store comments
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
 

  const fetchPostData = async () => {
    const res = await fetch('http://localhost:5000/create/getall');
    console.log(res.status);

    const data = await res.json();
    console.log(data);

    setpost(data);

  };

  useEffect(() => {
    fetchPostData();

  }, []);

  const displayPostData = () => {
    return post.map((post) => (
      

      <div className="col-md-4 mx-auto px-2" >
        <div className="my-img shadow my-2 p-2  ">
          <div className="top">
            
          <img src={avatar} className='avatar-photo' alt="" />
          <h5 className='post-text' >{post.username}</h5>
          </div>
          <img className='img-fluid ' src={'http://localhost:5000/' + post.image} alt="" srcset="" />
          

          <div className="content">
            <p style={{ fontSize: 15, paddingtop: 4 }}>
              {post.caption}

            </p>
             <i  onClick={handleClick} className={`icon ${clicked ? 'clicked' : ''} fa-solid fa-heart`} ></i>
          
            <div>
              <div className="comment-list">
              
                {comments.map((comment, index) => (
                  <div key={index} className="comment-item">
                    {comment}
                  </div>
                ))}
              </div>
           
               <InputEmoji
          value={text}
          onChange={setText}
          cleanOnEnter
          onEnter={handleOnEnter}
          placeholder="Type a message"
        />
            </div>
          </div>


        </div>

      </div>







    ))
  }
  return (
    <div>
      <Nav/>
      <div>
    
        <div className="container">

          {displayPostData()}




        </div>

      </div>


    </div>
  )
}

export default Home