import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import AddCandidateModal from './AddCandidateModal';
import { getCandidates, addCandidate, updateCandidate, deleteCandidate } from './pipelineCRUD';
import Table from "react-bootstrap/Table";

const CandidatePipeline = () => {
  const [candidates, setCandidates] = useState([]);
  const [editMode, setEditMode] = useState(null);
  const [editedCandidate, setEditedCandidate] = useState({});
  const [newCandidate, setNewCandidate] = useState({ fullName: '', email: '', phone: '', bestRole: '' });
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Load candidates when the component mounts
    loadCandidates();
  }, []);

  const loadCandidates = async () => {
    try {
      const data = await getCandidates();
      setCandidates(data);
    } catch (error) {
      // Handle error
    }
  };

  const handleEdit = (candidate) => {
    setEditMode(candidate.id);
    setEditedCandidate({ ...candidate });
  };

  const handleSave = async () => {
    try {
      await updateCandidate(editedCandidate);
      setEditMode(null);
      // Refresh the candidate data after saving
      loadCandidates();
    } catch (error) {
      // Handle error
    }
  };

  const handleDelete = async (candidateId) => {
    try {
      await deleteCandidate(candidateId);
      // Refresh the candidate data after deleting
      loadCandidates();
    } catch (error) {
      // Handle error
    }
  };

  const handleAddCandidate = async () => {
    try {
      await addCandidate(newCandidate);
      // Refresh the candidate data after adding
      loadCandidates();
      // Clear the form fields
      setNewCandidate({ fullName: '', email: '', phone: '', bestRole: '' });
      // Close the modal
      setShowModal(false);
    } catch (error) {
      // Handle error
    }
  };
  return (
    <div className='container-fluid'>
      <h1 id="header">VETTED CANDIDATE PIPELINE</h1>

      <Button id="creation" onClick={() => setShowModal(true)}>
        Add New Candidate
      </Button>
      <Table striped bordered hover id="pipelineTable">
        <thead>
          <tr>
            <th id="tableColor">Name</th>
            <th id="tableColor">Email</th>
            <th id="tableColor">Phone</th>
            <th id="tableColor">Best Role</th>
            <th id="tableColor">Update</th>
            <th id="tableColor">Delete</th>
          </tr>
        </thead>
        <tbody>
          {candidates.map((candidate) => (
            <tr key={candidate.id}>
              <td id="rowColor">
                {editMode === candidate.id ? (
                  <input
                    type="text"
                    value={editedCandidate.fullName}
                    onChange={(e) => setEditedCandidate({ ...editedCandidate, fullName: e.target.value })}
                  />
                ) : (
                  candidate.fullName
                )}
              </td>
              <td id="rowColor">
                {editMode === candidate.id ? (
                  <input
                    type="email"
                    value={editedCandidate.email}
                    onChange={(e) => setEditedCandidate({ ...editedCandidate, email: e.target.value })}
                  />
                ) : (
                  candidate.email
                )}
              </td>
              <td id="rowColor">
                {editMode === candidate.id ? (
                  <input
                    type="phone"
                    value={editedCandidate.phone}
                    onChange={(e) => setEditedCandidate({ ...editedCandidate, phone: e.target.value })}
                  />
                ) : (
                  candidate.phone
                )}
              </td>
              <td id="rowColor">
                {editMode === candidate.id ? (
                  <input
                    type="text"
                    value={editedCandidate.bestRole}
                    onChange={(e) => setEditedCandidate({ ...editedCandidate, bestRole: e.target.value })}
                  />
                ) : (
                  candidate.bestRole
                )}
              </td>
              <td id="rowColor">
                {editMode === candidate.id ? (
                  <div>
                    <Button id="save" onClick={handleSave}>Save</Button>
                    <Button id="cancel" onClick={() => setEditMode(null)}>Cancel</Button>
                  </div>
                ) : (
                  <div>
                    <Button id="edit" onClick={() => handleEdit(candidate)}>Edit</Button>
                  </div>
                )}
              </td>
              <td id="rowColor">
                <Button id="delete" onClick={() => handleDelete(candidate.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <AddCandidateModal
        showModal={showModal}
        handleClose={() => setShowModal(false)}
        handleAddCandidate={handleAddCandidate}
        newCandidate={newCandidate}
        setNewCandidate={setNewCandidate}
      />
    </div>
  );
};

export default CandidatePipeline;

