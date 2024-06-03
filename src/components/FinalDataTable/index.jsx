import React from 'react';
import PropTypes from 'prop-types';

import './FinalDataTable.css';
const FinalDataTable = ({ data }) => {
	return (
		<div className="final-data-table scroll-x nowheel">
			<div className="rule-output-final ">
				<div className="final-flex-container">
					<div className='final-flex-row-container'>
						<div className="final-empty-space-header">Station Mac</div>
						<div className="final-flex-header">Station Mac</div>
						<div className="final-flex-header">Client Mac</div>
						<div className="final-flex-header">Device Name</div>
						<div className="final-flex-header">OS</div>
						<div className="final-flex-header">OS Version</div>
						<div className="final-flex-header">Model</div>
						<div className="final-flex-header">Model Version</div>
						<div className="final-flex-header">Brand</div>
						<div className="final-flex-header">Device Type</div>
						<div className="final-flex-header">Total Confidence Score</div>
					</div>
					<div className="line" />
					{
						data.map((device, idx) => (
							<div key={idx}>
								<div className="final-flex-row" >
									<div className="final-flex-item final-empty-space-header final-device-name"> {device.mac == '-' ? '-' : `Device ${idx + 1}`}</div>
									<div className="final-flex-item">{device['mac']}</div>
									<div className="final-flex-item">{device['gatewayMac']}</div>
									<div className="final-flex-item">{device['deviceName']}</div>
									<div className="final-flex-item">{device['operatingSystem']}</div>
									<div className="final-flex-item">{device['osVersion']}</div>
									<div className="final-flex-item">{device['model']}</div>
									<div className="final-flex-item">{device['modelVersion']}</div>
									<div className="final-flex-item">{device['brand']}</div>
									<div className="final-flex-item">{device['type']}</div>
									<div className="final-flex-item">{device['modelAccuracyLevel']}</div>
								</div>
								{idx != data.length - 1 && <div className='line' />}
							</div>

						))
					}
				</div>
			</div>
		</div>
	);
};

export default FinalDataTable;

FinalDataTable.propTypes = {
	data: PropTypes.array.isRequired,
};
