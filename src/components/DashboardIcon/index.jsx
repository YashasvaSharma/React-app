import React from 'react';
// import '../IotCoreIcon/IotCoreIcon.css';
import DashBoardIconImg from '../../assets/solutions.png';

const DashboardIcon = () => {
	return (
		<div className="iot-core-container">
			<img src={DashBoardIconImg} alt="SecApiIcon" width="64" height="64" />
			<p> Airties Existing Solution</p>
		</div>
	);
};

export default DashboardIcon;