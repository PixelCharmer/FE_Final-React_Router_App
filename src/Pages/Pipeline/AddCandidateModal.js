import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

// created a modal with dialog for adding a new candidate to the pipeline table

// defines a functional component that recives several props: showModal, handleClose, handleAddCandidate, newCandidate, and setNewCandidate
// the props control the modal and the visibility of the modal

const AddCandidateModal = ({ showModal, handleClose, handleAddCandidate, newCandidate, setNewCandidate }) => {
  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Candidate</Modal.Title>
      </Modal.Header>
      <Modal.Body>

        {/* inside the modal are forms that holds the input fields needed for adding a newly vetted candidate to the table */}

        <Form>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter fullName" value={newCandidate.fullName} onChange={(e) => setNewCandidate({ ...newCandidate, fullName: e.target.value })} />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={newCandidate.email} onChange={(e) => setNewCandidate({ ...newCandidate, email: e.target.value })} />
          </Form.Group>
          <Form.Group controlId="formStatus">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="phone" placeholder="Enter phone" value={newCandidate.phone} onChange={(e) => setNewCandidate({ ...newCandidate, phone: e.target.value })} />
          </Form.Group>
          <Form.Group controlId="formSkills">
            <Form.Label>Best Role</Form.Label>
            <Form.Control type="text" placeholder="Enter bestRole" value={newCandidate.bestRole} onChange={(e) => setNewCandidate({ ...newCandidate, bestRole: e.target.value })} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>

        {/* the modal footer holds the buttons that control form inputs or closes the modal */}

        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleAddCandidate}>
          Add Candidate
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddCandidateModal;
