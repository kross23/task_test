import React from "react";
import Slider from "react-slick";
import NextArrow from "../Arrow/NextArrow";
import PrevArrow from "../Arrow/PrevArrow";
import Carduser from "../CardUser/CardUser";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";

const Carosel = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    margin-top: 100px;
`;

const Index = ({ props, handleClick }) => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 500,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: "35px",
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: "25px",
                },
            },
        ],
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };
    return (
        <Carosel>
            <Slider {...settings}>
                {props &&
                    props.map(({ id, name, username, active }) => (
                        <Carduser
                            id={id}
                            key={id}
                            username={username}
                            name={name}
                            handleClick={handleClick}
                            active={active}
                        />
                    ))}
            </Slider>
        </Carosel>
    );
};

export default Index;
//1280
