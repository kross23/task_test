import React from "react";
import arrowLeft from "../../image/arrowLeft.svg";
import styled from "styled-components";
const Parrow = styled.section`
    display: block;
    height: 48px;
    width: 48px;
    position: absolute;
    top: -70px;
    left: calc(50% - 78px);
`;
const Prevarrow = (props) => {
    const { className, onClick } = props;
    return (
        <Parrow className={className} onClick={onClick}>
            <img src={arrowLeft} alt="prev" />
        </Parrow>
    );
};

export default Prevarrow;
