import React, { useState, useCallback, useEffect } from 'react';
import ReactFlow, { applyNodeChanges, MarkerType } from 'reactflow';
import axios from 'axios';

import {
	DashboardIcon,
	ElasticCacheIcon,
	IotCoreIcon,
	RawDataBox,
	RouterBox,
	RuleProcessor,
	SecApiButton
} from '../../components';

import './MainPage.css';
import 'reactflow/dist/style.css';

const MainPage = () => {
	const [rawData, setRawData] = useState({});
	const [initialData, setInitialData] = useState([
		{
			clientMac: 'A9:F0:I3:J1:K0:L8',
			meta: [
				{
					type: '-',
					value: '-',
					tl: '-',
					timestamp: '-'
				}
			]
		}
	]);

	const [finalData, setFinalData] = useState([
		{
			id: '-',
			modelAccuracyLevel: '-',
			operatingSystem: '-',
			osVersion: '-',
			gatewayMac: '-',
			model: '-',
			modelVersion: '-',
			brand: '-',
			type: '-',
			mac: '-',
			deviceName: '-',
			activeMac: '-',
			macs: ['-']
		}
	]);

	const fetchData = async () => {
		try {
			const rawDataResponse = await axios.get('http://localhost:8080/data/getRawData');
			setRawData(rawDataResponse.data);

			const initialDataResponse = await axios.get('http://localhost:8080/data/getInitiallDeviceData');
			setInitialData(initialDataResponse.data);

			const finalDataResponse = await axios.get('http://localhost:8080/data/getFinalDeviceData');
			setFinalData(finalDataResponse.data);
		} catch (error) {
			console.error('Error fetching data', error);
		}
	};

	const initialNodes = [
		{
			id: '1',
			type: 'input',
			data: { label: <RouterBox /> },
			position: { x: 10, y: 100 },
			style: { width: 200, background: '#FBF2E7' },
			sourcePosition: 'right'
		},
		{
			id: '2',
			dragging: true,
			data: { label: <IotCoreIcon /> },
			position: { x: 330, y: 300 },
			style: { width: 100, background: '#D2D9FA' },
			sourcePosition: 'bottom',
			targetPosition: 'left'
		},
		{
			id: '3',
			data: { label: 'Decoding raw information' },
			position: { x: 325, y: 475 },
			style: { width: 110, background: '#D2D9FA', fontSize: '1rem', fontWeight: 'bold' },
			targetPosition: 'top',
			sourcePosition: 'right'
		},
		{
			id: '4',
			data: { label: <RawDataBox rawData={JSON.stringify(rawData)} /> },
			position: { x: 580, y: 50 },
			style: { width: 360, background: '#D2D9FA' },
			targetPosition: 'left',
			sourcePosition: 'right'
		},
		{
			id: '5',
			data: { label: <ElasticCacheIcon /> },
			position: { x: 1050, y: 284.3 },
			style: { width: 100, background: 'lightblue' },
			targetPosition: 'left',
			sourcePosition: 'right'
		},
		{
			id: '6',
			data: { label: <RuleProcessor initialData={initialData} finalData={finalData} /> },
			position: { x: 1300, y: 114.3 },
			style: { width: 770, height: 480, background: 'white', border: '2px dotted #3C2EFF', overflow: 'hidden' },
			targetPosition: 'left',
			sourcePosition: 'right'
		},
		{
			id: '7',
			data: { label: <SecApiButton getData={fetchData} /> },
			position: { x: 2165, y: 303 },
			style: { width: 100, background: '#D2D9FA', cursor: 'pointer' },
			targetPosition: 'left',
			sourcePosition: 'right'
		},
		{
			id: '8',
			type: 'output',
			data: { label: <DashboardIcon /> },
			position: { x: 2340, y: 284.5 },
			style: { width: 100, background: '#FBF2E7' },
			targetPosition: 'left'
		}
	];

	const initialEdges = [
		{
			id: 'e1-2',
			source: '1',
			target: '2',
			type: 'smoothstep',
			markerEnd: {
				type: MarkerType.ArrowClosed,
				width: 25,
				height: 25,
				color: '#4539FF'
			},
			style: { stroke: '#4539FF', strokeWidth: 2 }
		},
		{
			id: 'e2-3',
			source: '2',
			target: '3',
			type: 'smoothstep',
			markerEnd: {
				type: MarkerType.ArrowClosed,
				width: 25,
				height: 25,
				color: '#4539FF'
			},
			style: { stroke: '#4539FF', strokeWidth: 2 }
		},
		{
			id: 'e3-4',
			source: '3',
			target: '4',
			type: 'smoothstep',
			markerEnd: {
				type: MarkerType.ArrowClosed,
				width: 25,
				height: 25,
				color: '#4539FF'
			},
			style: { stroke: '#4539FF', strokeWidth: 2 }
		},
		{
			id: 'e4-5',
			source: '4',
			target: '5',
			type: 'smoothstep',
			markerEnd: {
				type: MarkerType.ArrowClosed,
				width: 25,
				height: 25,
				color: '#4539FF'
			},
			style: { stroke: '#4539FF', strokeWidth: 2 }
		},
		{
			id: 'e5-6',
			source: '5',
			target: '6',
			type: 'smoothstep',
			markerEnd: {
				type: MarkerType.ArrowClosed,
				width: 25,
				height: 25,
				color: '#4539FF'
			},
			style: { stroke: '#4539FF', strokeWidth: 2 }
		},
		{
			id: 'e6-7',
			source: '6',
			target: '7',
			type: 'smoothstep',
			markerEnd: {
				type: MarkerType.ArrowClosed,
				width: 25,
				height: 25,
				color: '#4539FF'
			},
			style: { stroke: '#4539FF', strokeWidth: 2 }
		},
		{
			id: 'e7-8',
			source: '7',
			target: '8',
			type: 'smoothstep',
			markerEnd: {
				type: MarkerType.ArrowClosed,
				width: 25,
				height: 25,
				color: '#4539FF'
			},
			style: { stroke: '#4539FF', strokeWidth: 2 }
		}
	];

	const [nodes, setNodes] = useState(initialNodes);
	const [edges] = useState(initialEdges);

	const onNodesChange = useCallback(
		(changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
		[]
	);

	useEffect(() => {
		setNodes((nds) =>
			nds.map((node) => {
				if (node.id === '4') {
					return {
						...node,
						data: { ...node.data, label: <RawDataBox rawData={JSON.stringify(rawData)} /> }
					};
				}
				if (node.id === '6') {
					return {
						...node,
						data: { ...node.data, label: <RuleProcessor initialData={initialData} finalData={finalData} /> }
					};
				}
				return node;
			})
		);
	}, [rawData, initialData, finalData]);

	const translateExtent = [
		[-100, -1000],         // Minimum x and y coordinates
		[2500, 3000]      // Maximum x and y coordinates
	];

	return (
		<div className='main-container'>
			<div className='ui-container'>
				<ReactFlow
					nodes={nodes}
					edges={edges}
					onNodesChange={onNodesChange}
					zoomOnScroll={false}
					zoomOnPinch={false}
					draggable={false}
					zoomOnDoubleClick={false}
					panOnDrag={false}
					panOnScroll={true}
					panOnScrollMode='horizontal'
					translateExtent={translateExtent}
					fitView
					fitViewOptions={{
						// minZoom: 0.5,
						nodes: nodes.slice(0, 6)
					}}
				/>
			</div>
		</div>
	);
};

export default MainPage;
