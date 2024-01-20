import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const AddCandidateModal = ({ showModal, handleClose, handleAddCandidate, newCandidate, setNewCandidate }) => {
  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Candidate</Modal.Title>
      </Modal.Header>
      <Modal.Body>
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
