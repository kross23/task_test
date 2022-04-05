import React from 'react';
import arrowRight from '../../image/arrow-right.svg';
import styled from 'styled-components';
const Narrow = styled.section`
display: block;
height: 48px;
width: 48px;
position: absolute;
top:-70px;
left:calc(50% );
`



const Nextarrow = (props) => {
		const { className,  onClick } = props;
		return (

			<Narrow
				className={className}
				onClick={onClick}
			>
					<img src={arrowRight}/>
					</Narrow>
		);
}

export default Nextarrow;
