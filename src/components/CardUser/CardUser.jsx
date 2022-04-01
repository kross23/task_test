import React from 'react';
import styled from 'styled-components';
const Card = styled.div`
position: relative;
.img{
    height: 320px;
    width: 290px;
  
}
.title_name{
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    text-align: left;
    color: #384758;
}
.title_username{
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    text-align: left;
    color: #606F81;
}
.activeuser{
   color:#FE8700;
}
.activeImg{
    position: absolute;
    bottom: 61px;
    left: 0;
    width: 91%;
    height: 5px;
    background-color:#FE8700 ;
}
`

const Carduser = ({id, name, username, handleClick, active}) => {



    return (       
            active? <Card onClick={handleClick} id ={id}  >
            <img className='img' id ={id} src={`https://i.pravatar.cc/300?img=${id}`} alt="" />
            <div className='activeImg'></div>
            <div className="title_name activeuser">{name}</div>
            <div className="title_username activeuser">{username}</div>
            </Card> 
        : 
            <Card onClick={handleClick} id ={id}  >
            <img className='img' id ={id} src={`https://i.pravatar.cc/300?img=${id}`} alt="" />
            <div className="title_name">{name}</div>
            <div className="title_username">{username}</div>
        </Card> 
    
    );
}

export default Carduser;
