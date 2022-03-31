import React from 'react';
import styled from 'styled-components';
const Card = styled.div`

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
.title_nic{

font-weight: 400;
font-size: 18px;
line-height: 27px;
text-align: left;
color: #606F81;
}
`

const Carduser = ({id}) => {
    return (
        <Card>
            <img className='img' src={`https://i.pravatar.cc/300?img=${id}`} alt="" />
            <div className="title_name">Сидоров Иван</div>
            <div className="title_nic">Delphine</div>
        </Card>
    );
}

export default Carduser;
