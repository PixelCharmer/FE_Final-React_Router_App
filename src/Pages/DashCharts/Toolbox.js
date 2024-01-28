import Card from 'react-bootstrap/Card';

// used react bootstrap card elements to hold links to various files recruiters need

function Toolbox() {
    return (
        <Card id="toolboxCard">
            <Card.Body>
                <Card.Title>Recruiter Toolbox Documents </Card.Title><br></br>
                <Card.Link href='https://app.box.com/s/kr6a4ugk4q2rkeqq8lma593biio1c0ms' id="styling">PreScreen Questions</Card.Link><br></br>
                <Card.Link href='https://app.box.com/s/1aj6edfw2dzti2kvoyv2r6k5ztlq888i' id="styling">Technical Interview Email Template</Card.Link><br></br>
                <Card.Link href='https://app.box.com/s/1aj6edfw2dzti2kvoyv2r6k5ztlq888i' id="styling">Passive Candidate Communication</Card.Link><br></br>
                <Card.Link href='https://app.box.com/s/1aj6edfw2dzti2kvoyv2r6k5ztlq888i' id="styling">Sourcing Email Template</Card.Link><br></br>
                <Card.Link href='https://app.box.com/s/1aj6edfw2dzti2kvoyv2r6k5ztlq888i' id="styling">Marketing Tool</Card.Link><br></br>
                <Card.Link href='https://app.box.com/s/1aj6edfw2dzti2kvoyv2r6k5ztlq888i' id="styling">Search String Review</Card.Link><br></br>
            </Card.Body>
        </Card>
    );
}

export default Toolbox;