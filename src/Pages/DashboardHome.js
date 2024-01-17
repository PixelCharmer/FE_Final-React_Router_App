// DashboardHome.js

import React from 'react';
import Funnel from './DashCharts/Funnel';
import Satisfaction from './DashCharts/Satisfaction';
import Sources from './DashCharts/Sources';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Toolbox from './DashCharts/Toolbox'


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
        <Row id="frontspace">
          <Col sm={9}>
            <Funnel />
          </Col>
          <Col sm={3} id="frontspace">
            <Toolbox />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default DashboardHome;
