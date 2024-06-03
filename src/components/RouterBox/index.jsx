import React from 'react';
import './RouterBox.css';

import RouterIcon from '../../assets/router.png';

const RouterBox = () => {
	return (
		<div className='router-box-container '>
			<div className='top-heading'>
				<p>Geritt&apos;s home</p>
				<p>&lt; chm1 &gt;</p>
			</div>
			<div className='router-section'>
				<img src={RouterIcon} width='64' height='64' alt='broadband' />
				<p> Airties Home Network</p>
			</div>
			{/* <div className='identified-device-section'>
				<img src='https://cdn4.iconfinder.com/data/icons/vecico-connectivity/288/wifi_Symbol-512.png' width='64' height='64' alt='wifi' />
				<div className='identified-device'>
					<p> Device Connected: </p>
					<p> - Iphone</p>
					<p> - Macbook</p>
				</div>
			</div> */}
		</div>
	);
};

export default RouterBox;
