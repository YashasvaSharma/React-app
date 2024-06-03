import React from 'react';
import PropTypes from 'prop-types';
import './RuleProcessor.css';

import RuleProcessorIcon from '../../assets/rule-processing.png';
import InitialDataTable from '../InitialDataTable';
import FinalDataTable from '../FinalDataTable';

const RuleProcessor = (props) => {

	return (
		<div className='rp-container'>
			<div className='rp-header'>
				<img src={RuleProcessorIcon} width='64' height='64' alt='Rule Processor' className='icon' />
				<p> Rule Processing</p>
			</div>

			<div className='rp-content'>
				<div className='rp-content-col'>
					<h2 className='rp-content-h2'>Initial Rule Output</h2>
					<InitialDataTable data={props.initialData} />
				</div>
				<div className='rp-content-col'>
					<h2 className='rp-content-h2-final'>Final Device Output</h2>
					<FinalDataTable data={props.finalData} />
				</div>
			</div>
		</div>
	);
};
export default RuleProcessor;

RuleProcessor.propTypes = {
	initialData: PropTypes.array.isRequired,
	finalData: PropTypes.array.isRequired,
};
