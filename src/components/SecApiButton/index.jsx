import React from 'react';
import PropTypes from 'prop-types';
import SecApiIcon from '../../assets/api.png';

const SecApiButton = (props) => {
	return (
		<div className='iot-core-container' onClick={props.getData}>
			<img src={SecApiIcon} alt='SecApiIcon' width="64" height="64" />
			<p> Sec API</p>
		</div>
	);
};

export default SecApiButton;

SecApiButton.propTypes = {
	getData: PropTypes.func.isRequired,
};
