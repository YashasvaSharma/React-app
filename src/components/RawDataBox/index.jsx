import React from 'react';
import PropTypes from 'prop-types';
import './RawDataBox.css';
const RawDataBox = (props) => {



	return (
		<div className='rdb-container'>
			<div className='rdb-heading'>
				<p className='rdb-heading-text'>Raw Data</p>
			</div>
			<div className='rdb-textarea-container'>
				<textarea className=' nowheel rdb-textarea' placeholder='Raw data will be displayed here' value={props.rawData == '{}' ? '' : props.rawData} />
			</div>
		</div>
	);
};

export default RawDataBox;

RawDataBox.propTypes = {
	rawData: PropTypes.string.isRequired,
};
