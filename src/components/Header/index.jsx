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
    max-width:432px;
  }
  @media (max-width: 768px) { 
   h1{
    font-size: 38px;
    line-height: 35px;
    padding-bottom:37px;
   }
   .header__desc{
    text-align: center;
    margin:0 auto;
    padding:0 5px;
  font-size: 16px;
  line-height: 27px;
   }
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
