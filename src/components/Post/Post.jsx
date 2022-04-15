import React from 'react';
import styled from 'styled-components';
const PostCard = styled.div`
    width: 100%;
    background-color: transparent;
    padding-top:20px;
    padding-left:10px;
    padding-right:10px;
.post__title{
    margin:0;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    color: #384758;
    background-color: transparent;
}
.post__body{
    margin:0;
    padding-top:7px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;  
    color: #606F81;
}
@media (max-width: 768px) { 
    .post__title{
        font-size: 20px;
        line-height: 22px;
    }
}`;

const text="Lorem ipsum dolor sit amet, consectetur adipiscing elit.Felis nec platea ipsum ornare interdum.Aliquet metus suscipit ornare aliquet accumsan, massa risus quisque ac. Pellentesque risus mauris mattis viverra amet sed elit. Pellentesque dui vitae amet diam convallis nisi nec.";

const Post = ({title="Заголовок поста",body= text}) => {

    return (
        <PostCard>
                <h4 className='post__title'>{title}</h4>
                <p className='post__body'>
                    {body}
                </p>
        </PostCard>
    );
}

export default Post;
