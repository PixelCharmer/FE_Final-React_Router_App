// FlowChart.js

import Diagram, { createSchema, useSchema } from 'beautiful-react-diagrams';

const initialSchema = createSchema({
    nodes: [
      { id: 'node-1', content: 'Need Indentified', coordinates: [100, 60], },
      { id: 'node-2', content: 'Define Requirements', coordinates: [320, 60], },
      { id: 'node-3', content: 'Post Job', coordinates: [550, 60], },
      { id: 'node-4', content: 'Review Apps', coordinates: [700, 60], },
      { id: 'node-5', content: 'Qualified?', coordinates: [700, 160], },
      { id: 'node-6', content: 'Yes', coordinates: [550, 160], },
      { id: 'node-7', content: 'No', coordinates: [850, 160], },
      { id: 'node-8', content: 'Phone Screen Passed?', coordinates: [550, 260], },
      { id: 'node-9', content: 'Yes', coordinates: [400, 260], },
      { id: 'node-10', content: 'No', coordinates: [800, 260], },
      { id: 'node-11', content: 'Interview', coordinates: [400, 360], },
      { id: 'node-12', content: 'Interview Passed?', coordinates: [550, 360], },
      { id: 'node-13', content: 'No', coordinates: [750, 360], },
      { id: 'node-14', content: 'Yes', coordinates: [600, 460], },
      { id: 'node-15', content: 'Send Assessment', coordinates: [375, 460], },
      { id: 'node-16', content: 'Assessment Passed?', coordinates: [150, 460], },
      { id: 'node-17', content: 'No', coordinates: [250, 320], },
      { id: 'node-18', content: 'Yes', coordinates: [250, 560], },
      { id: 'node-19', content: 'Extend Offer', coordinates: [450, 560], },
      { id: 'node-20', content: 'Send Rejection', coordinates: [900, 360], },
      { id: 'node-21', content: 'Start', coordinates: [70, 0], },
    ],
    links: [
      { input: 'node-1',  output: 'node-2' },
      { input: 'node-2',  output: 'node-3' },
      { input: 'node-3',  output: 'node-4' },
      { input: 'node-4',  output: 'node-5' },
      { input: 'node-5',  output: 'node-6' },
      { input: 'node-6',  output: 'node-8' },
      { input: 'node-8',  output: 'node-10' },
      { input: 'node-8',  output: 'node-9' },
      { input: 'node-9',  output: 'node-11' },
      { input: 'node-11',  output: 'node-12' },
      { input: 'node-12',  output: 'node-13' },
      { input: 'node-12',  output: 'node-14' },
      { input: 'node-14',  output: 'node-15' },
      { input: 'node-15',  output: 'node-16' },
      { input: 'node-16',  output: 'node-17' },
      { input: 'node-16',  output: 'node-18' },
      { input: 'node-18',  output: 'node-19' },
      { input: 'node-7',  output: 'node-20' },
      { input: 'node-10',  output: 'node-20' },
      { input: 'node-13',  output: 'node-20' },
      { input: 'node-17',  output: 'node-20' },
      { input: 'node-5',  output: 'node-7' },
      { input: 'node-21',  output: 'node-1' }
    ],
  });

const FlowChart = () => {
  // create diagrams schema
  const [schema, { onChange }] = useSchema(initialSchema);

  return (
    <div style={{ height: '38.5rem' }}>
      <h1 id="header2" align="center">RECRUITMENT PROCESS WORKFLOW</h1>
      <Diagram schema={schema} onChange={onChange} />
    </div>
  );
};

export default FlowChart;
