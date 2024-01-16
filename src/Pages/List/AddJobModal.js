// AddJobModal.js

import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const AddJobModal = ({ showModal, handleClose, handleAddJob, newJob, setNewJob }) => {
  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Job</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formJob">
            <Form.Label>Job</Form.Label>
            <Form.Control type="text" placeholder="Enter job" value={newJob.job} onChange={(e) => setNewJob({ ...newJob, job: e.target.value })} />
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
