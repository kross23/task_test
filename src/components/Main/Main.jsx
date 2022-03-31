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
    
    
      useEffect(() => {
        getAlluser(setstateUser);
        getAllPost(setposts);
      console.log("datauser: ", stateUser);
      console.log(posts);
      }, []);


    return (
        <Section className='main'>
            <Header/>
            <Slider   />
            <Headerpost/>
            <div className="container">
            <Post/>
            <Post/>
            <Post/>
            </div>
        </Section>
    );
}

export default Main;
