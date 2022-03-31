import React from 'react';
import Slider from "react-slick";
import NextArrow from '../Arrow/NextArrow';
import PrevArrow from '../Arrow/PrevArrow';
import Carduser from '../CardUser/CardUser';
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";

const Carosel = styled.div`
width: 1280px;
margin: 0 auto;
margin-top:100px;

`


const Index = () => {
    
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
      };

     // https://i.pravatar.cc/300?img=1
const arr = [1,2,3,4,5,6,7,8,9,10]


    return (
        <Carosel>
        <Slider {...settings}>

     {  arr.map((item)=>(

           <Carduser id={item} key={item}/>
       ))}

        </Slider>
      </Carosel>
    );
     
}

export default Index;
//1280