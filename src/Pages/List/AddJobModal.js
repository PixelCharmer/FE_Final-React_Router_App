import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

// created a modal with dialog for adding a new job to the openings table 

// defines a functional component that recives several props: showModal, handleClose, handleAddJob, newJob, and setNewJob
// the props control the modal and the visibility of the modal

const AddJobModal = ({ showModal, handleClose, handleAddJob, newJob, setNewJob }) => {
  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Job</Modal.Title>
      </Modal.Header>
      <Modal.Body>

        {/* inside the modal are forms that holds the input fields needed for posting a new job opening */}

        <Form>
          <Form.Group controlId="formJob">
            <Form.Label>Job</Form.Label>
            <Form.Control type="text" placeholder="Enter job" value={newJob.job} onChange={(e) => setNewJob({ ...newJob, job: e.target.value })} />
          </Form.Group>
          <Form.Group controlId="formJob">
            <Form.Label>Req Number</Form.Label>
            <Form.Control type="text" placeholder="Enter Req#" value={newJob.reqnumber} onChange={(e) => setNewJob({ ...newJob, reqnumber: e.target.value })} />
          </Form.Group>
          <Form.Group controlId="formDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" placeholder="Enter description" value={newJob.description} onChange={(e) => setNewJob({ ...newJob, description: e.target.value })} />
          </Form.Group>
          <Form.Group controlId="formHiringManager">
            <Form.Label>Hiring Manager</Form.Label>
            <Form.Control type="text" placeholder="Enter hiring manager" value={newJob.hiringManager} onChange={(e) => setNewJob({ ...newJob, hiringManager: e.target.value })} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>

        {/* the modal footer holds the buttons that control form inputs or closes the modal */}

        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleAddJob}>
          Add Job
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddJobModal;
