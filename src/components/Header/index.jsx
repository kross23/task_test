import React from 'react';
import styled from 'styled-components';
const Header = styled.header`
margin:0;
padding-top: 64px;
padding-bottom: 31px;
  h1{
    display: block;
    text-align: center;
    padding-bottom:47px;
   
    margin:0;
        font-weight: 600;
        font-size: 48px;
        line-height: 20px;
        color: #384758;
  }
  .header__desc{
    display: block;
      text-align: center;
      margin:0 auto;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    color: #606F81;
    width:432px;
  }
`;

const Index = () => {
    return (
        <Header>
            <h1 className='header_title'>Наши топ-блогеры</h1>
            <span className='header__desc'>
            Лучше специалисты в&nbsp;своем деле,&nbsp; 
средний опыт работы в&nbsp;профессии&nbsp;&mdash;27&nbsp;лет.
            </span>
        </Header>
    );
}

export default Index;
