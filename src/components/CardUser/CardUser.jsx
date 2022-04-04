import React from 'react';
import styled from 'styled-components';
const Card = styled.div`
position: relative;
margin:0 auto;

.image{
    position: relative;
    height: 320px;
    width: 290px;
    padding-bottom: 18px;
    &-active{


        &::after{
            position: absolute;
            content:'';
            bottom:5%;
            left: 0;
            width: 100%;
            height: 5px;
            background-color:#FE8700 ;
            z-index: 10000;
        }
    }
   
}
.img{
    height: 100%;
    width: 100%;
   
    
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

`

const Carduser = ({id, name, username, handleClick, active}) => {



    return (       
            active? <Card onClick={handleClick} id ={id}  >
                <div className="image image-active">
                    <img className='img' id ={id} src={`https://i.pravatar.cc/300?img=${id}`} alt="" />
                </div>
            
            <div className="title_name activeuser">{name}</div>
            <div className="title_username activeuser">{username}</div>
            </Card> 
        : 
            <Card onClick={handleClick} id ={id}  >
                <div className="image">
                <img className='img' id ={id} src={`https://i.pravatar.cc/300?img=${id}`} alt="" />
                </div>
           
            <div className="title_name">{name}</div>
            <div className="title_username">{username}</div>
        </Card> 
    
    );
}

export default Carduser;
