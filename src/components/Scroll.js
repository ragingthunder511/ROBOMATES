import React from 'react';

const Scroll=(props)=>{
	return (
		<div style={{height:'800px',border:'1px solid black',overflowY:'scroll'}}>
		{props.children}
		</div>
		)
}

export default Scroll;