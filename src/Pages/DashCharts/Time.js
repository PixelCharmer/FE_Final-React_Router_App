import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
class ErrorChart extends Component {
	render() {
		const options = {
			animationEnabled: true,
			theme: "light1",
			title:{
				text: "Average Time To Fill"
			},
			axisY:{
				title: "Days to fill",
			includeZero: true
			},
			toolTip: {
				shared: true
			},
			data: [
			{
				type: "column",
				name: "Actual Average",
				toolTipContent: "<b>{label}</b> <br> <span style=\"color:#4F81BC\">{name}</span>: {y}",
				dataPoints: [
					{ y: 28, label: "Software Engineer" },
					{ y: 74, label: "Data Scientist" },
					{ y: 49, label: "UX/UI" },
					{ y: 32, label: "Mobile Engineer" },
					{ y: 57, label: "Game Developer" }
				]
			},
			{
				type: "error",
				name: "Target Average",
				toolTipContent: "<span style=\"color:#C0504E\">{name}</span>: {y[0]} - {y[1]}",
				dataPoints: [
					{ y: [23, 33], label: "Software Engineer" },
					{ y: [66, 76], label: "Data Scientist" },
					{ y: [30, 40], label: "UX/UI" },
					{ y: [27, 37], label: "Mobile Engineer" },
					{ y: [50, 60], label: "Game Developer" }
				]
			}
			]
		}
		
		return (
		<div>
			<CanvasJSChart options = {options} 
			/>
		</div>
		);
	}
}

export default ErrorChart;