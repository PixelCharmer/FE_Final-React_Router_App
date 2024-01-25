import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const AddTrackerModal = ({ showModal, handleClose, handleAddTracker, newTracker, setNewTracker }) => {
    return (
        <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Create New Candidate</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlID="formName">
                        <Form.Label>Candidate Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter fullName" value={newTracker.candidateName} onChange={(e) => setNewTracker({ ...newTracker, candidateName: e.target.value })} />
                    </Form.Group>
                    <Form.Group controlId="formJobTitle">
                        <Form.Label>Job Title</Form.Label>
                        <Form.Control type="text" placeholder="Enter job title" value={newTracker.jobTitle} onChange={(e) => setNewTracker({ ...newTracker, jobTitle: e.target.value })} />
                    </Form.Group>
                    <Form.Group controlId="formStatus">
                        <Form.Label>Status:</Form.Label>
                        <Form.Select
                            id="stageInput"
                            type="text"
                            name="stage"
                            value={newTracker.stage}
                            onChange={(e) => setNewTracker({ ...newTracker, stage: e.target.value })}
                        >
                            <option value="--Current Status--">--Current Status--</option>
                            <option value="Under Review">Under Review</option>
                            <option value="Interviewing">Interviewing</option>
                            <option value="Pending Feedback">Pending Feedback</option>
                            <option value="Offer Extended">Offer Extended</option>
                            <option value="Offer Rescinded">Offer Rescinded</option>
                            <option value="Offer Accepted">Offer Accepted</option>
                            <option value="Offer Rejected">Offer Rejected</option>
                        </Form.Select>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleAddTracker}>
                    Add Candidate
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default AddTrackerModal;
