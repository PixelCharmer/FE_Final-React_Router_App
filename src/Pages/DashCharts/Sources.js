import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

// created the pie chart with canvasjs

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
                    { y: 29, label: "Indeed" },
                    { y: 10, label: "Dice" },
                    { y: 9, label: "Referral" },
                    { y: 19, label: "LinkedIn" },
                    { y: 15, label: "ZipRecruiter" }
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