import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Sources extends Component {
    render() {
        const options = {
            exportEnabled: true,
            animationEnabled: true,
            title: {
                text: "Application Sources"
            },
            data: [{
                type: "pie",
                startAngle: 75,
                toolTipContent: "<b>{label}</b>: {y}%",
                showInLegend: "true",
                legendText: "{label}",
                indexLabelFontSize: 16,
                indexLabel: "{label} - {y}%",
                dataPoints: [
                    { y: 18, label: "Company Careers Page" },
                    { y: 39, label: "Indeed" },
                    { y: 13, label: "Dice" },
                    { y: 11, label: "Referral" },
                    { y: 19, label: "LinkedIn" }
                ]
            }]
        }

        return (
            <div id="chartContainer">
                <CanvasJSChart options={options}
                />
            </div>
        );
    }
}

export default Sources;