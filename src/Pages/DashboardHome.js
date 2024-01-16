// DashboardHome.js

import React from 'react';
import Funnel from './DashCharts/Funnel';
import Satisfaction from './DashCharts/Satisfaction';
import Sources from './DashCharts/Sources';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function DashboardHome() {
  return (
    <div>
      <h2 id="dashHome">Recruitment Analytics</h2>

      <Container>
        <Row>
          <Col sm>
            <Satisfaction />
          </Col>
          <Col sm>
            <Sources />
          </Col>
        </Row>
      </Container>
      <br></br>
      <br></br>
      <Funnel />
    </div>
  );
}

export default DashboardHome;
