import React,{useEffect, useState} from 'react';
import Slider from '../Slider';
import styled from 'styled-components';
import Covbg from '../../image/imagebg.png';

import Headerpost from '../HeadePost/HeaderPost';
import Header from '../Header/index';
import Post from '../Post/Post';
import { getAllPost, getAlluser } from '../../http/getdata';

const Section = styled.section`
height: 100%;
width: 100%;
background-color: transparent;
padding-bottom: 600px;
background: no-repeat 105% 25%/auto 330px url(${Covbg}),no-repeat -12% 100%/auto 330px url(${Covbg});
z-index: 100;
.container{
    width:959px;
    background-color: transparent;
    margin-right: 100px;
    float: right;
}
`
  


const Main = () => {
    const [stateUser, setstateUser] = useState(null);
    const [posts, setposts] = useState(null);
    const [curentUser, setCurrentUser] = useState(null);

const handleClick = (e) => {
  const Id =  Number(e.target.id);
  let arr = [];
    for (const iterator of stateUser) {
      const {id, name, username, company, active } = iterator;
      let user;
      if(Number(id) !== Id){
         user = {
          id:id,name:name,username:username,company:company, active:false
        }
      }else{
       user = {
        id:id,name:name,username:username,company:company, active:true
        }
        setCurrentUser(username);
      }
      arr.push(user);
    }
    setstateUser(arr);
    getAllPost(setposts , Id)
    console.log("setposts: ", posts);

    
}





  useEffect(() => {
    if(stateUser === null){
      getAlluser(setstateUser);
    }
  }, []);

    return (
        <Section className='main'>
            <Header/>
            <Slider props={stateUser} handleClick={handleClick} />
         

            <Headerpost name={curentUser}/>

            <div className="container">
               {posts && posts.map(({title,body})=>(
                <Post title={title} body={body} key={title} />
              ))} 
            </div>
        </Section>
    );
}

export default Main;
//id, user_nick, user_name




