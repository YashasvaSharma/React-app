import React from 'react';
import PropTypes from 'prop-types';

import './InitialDataTable.css';

const InitialDataTable = ({ data }) => {
	return (
		<div className="data-table scroll-y nowheel">
			{data.map((rule, index) => (
				<div key={index}>
					<div className="rule-output">
						<h2 className={index != 0 ? 'except-first-rule-output-h2' : 'first-rule-output-h2'}>{rule.meta[0].type == '-' ? '-' : `Rule Output #${index + 1}`}</h2>
						<div className="flex-container">
							<div className='flex-row-container'>
								<div className="flex-header"
								// style={{ color: index == 10 ? '#D2D9FA' : 'black' }}
								>{index == 0 && 'Type'}</div>
								<div className="flex-header"
								// style={{ color: index == 10 ? '#D2D9FA' : 'black' }}
								>{index == 0 && 'Value'}</div>
								<div className="flex-header"
								// style={{ color: index == 10 ? '#D2D9FA' : 'black' }}
								>{index == 0 && 'Trust Level'}</div>
								<div className="flex-header"
								// style={{ color: index == 10 ? '#D2D9FA' : 'black' }}
								>{index == 0 && 'Time Stamp'}</div>
							</div>
							<div className="line-full" />
							{rule.meta.map((entry, idx) => (
								<div key={idx}>
									<div className="flex-row" >
										<div className="flex-item">{entry['type']}</div>
										<div className="flex-item">{entry['value']}</div>
										<div className="flex-item">{entry['tl']}</div>
										<div className="flex-item">{entry['timestamp']}</div>
									</div>
									{idx != rule.meta.length - 1 && <div className='line' />}
								</div>
							))}
						</div>
					</div>
					{/* {index != data.length - 1 && <div className="line" />} */}
				</div>
			))
			}
		</div >
	);
};

export default InitialDataTable;

InitialDataTable.propTypes = {
	data: PropTypes.array.isRequired,
};