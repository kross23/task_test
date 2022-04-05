import React from 'react';
import styled from 'styled-components';
import Covbg from '../../image/covbg.png';
const Hpost = styled.div`
width: 100%;
height: 128px;

background:no-repeat 20% 50px/auto 78px url(${Covbg}) ;

.container{
    padding-top:51px;
    width:959px;
    margin-right: 100px;
    float: right;
}
h2{

    display: block;
    
    text-align: left;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 48px;
    line-height: 48px;
    color: #384758;
}
@media (max-width: 768px) { 
    .container{
        width:100%;
        margin:0 auto;
    }
    h2{
        font-size: 28px;
        padding: 0 10px;
    }
}

`

const Headerpost = ({name ='Moriah.Stanton', id}) => {

    return (
        <Hpost>
            <div className="container">
            <h2>3 актуальных поста {name}</h2>
            </div>
            
            
        </Hpost>
    );
}

export default Headerpost;
