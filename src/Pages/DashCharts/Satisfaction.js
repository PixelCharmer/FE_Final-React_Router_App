import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
let CanvasJSChart = CanvasJSReact.CanvasJSChart;

// created the doughnut chart with canvasjs

class Satisfaction extends Component {
    render() {
        const options = {
            animationEnabled: true,
            title: {
                text: "Candidate Satisfaction"
            },
            subtitles: [{
                text: "71% Positive",
                verticalAlign: "center",
                fontSize: 24,
                dockInsidePlotArea: true
            }],
            data: [{
                type: "doughnut",
                showInLegend: true,
                indexLabel: "{name}: {y}",
                yValueFormatString: "#,###'%'",
                dataPoints: [
                    { name: "Unsatisfied", y: 12 },
                    { name: "Very Unsatisfied", y: 6 },
                    { name: "Very Satisfied", y: 40 },
                    { name: "Satisfied", y: 18 },
                    { name: "Neutral", y: 11 },
                    { name: "Simi-Satisfied", y: 13 }
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

export default Satisfaction;