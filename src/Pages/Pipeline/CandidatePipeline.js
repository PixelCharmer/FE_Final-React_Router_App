// CandidatePipeline.js

import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import AddCandidateModal from './AddCandidateModal';

const CandidatePipeline = () => {
  const URL = "https://65a21c3d42ecd7d7f0a723e6.mockapi.io/pipeline";
  const [candidates, setCandidates] = useState([]);
  const [editMode, setEditMode] = useState(null);
  const [editedCandidate, setEditedCandidate] = useState({});
  const [newCandidate, setNewCandidate] = useState({ fullName: '', email: '', phone: '', bestRole: '' });
  const [showModal, setShowModal] = useState(false);

  const getCandidates = async () => {
    try {
      const response = await fetch(URL);
      if (!response.ok) {
        throw new Error("Failed to fetch candidates");
      }
      const data = await response.json();
      setCandidates(data);
    } catch (error) {
      console.error("Error fetching candidates:", error.message);
    }
  };

  useEffect(() => {
    getCandidates();
  }, []);

  const splitIntoColumns = (data, columns) => {
    const result = Array.from({ length: columns }, (_, index) =>
      data.filter((_, dataIndex) => dataIndex % columns === index)
    );
    return result;
  };

  const columns = splitIntoColumns(candidates, 5); // Updated for 5 columns

  const handleEdit = (candidate) => {
    setEditMode(candidate.id);
    setEditedCandidate({ ...candidate });
  };

  const handleSave = () => {
    // Implement the logic to save the edited candidate to the API
    // For simplicity, let's assume you have an API endpoint to update a candidate
    // You need to adapt this part based on your actual API structure and update logic
    fetch(`${URL}/${editedCandidate.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editedCandidate),
    })
      .then((response) => response.json())
      .then(() => {
        setEditMode(null);
        // Refresh the candidate data after saving
        getCandidates();
      })
      .catch((error) => console.error("Error saving candidate:", error.message));
  };

  const handleDelete = (jobId) => {
    fetch(`${URL}/${jobId}`, {
      method: "DELETE",
    })
      .then(() => {
        getCandidates();
      })
      .catch((error) => console.error("Error deleting job:", error.message));
  };


  const handleAddCandidate = () => {
    // Implement the logic to add the new candidate to the API
    // For simplicity, let's assume you have an API endpoint to add a new candidate
    // You need to adapt this part based on your actual API structure and add logic
    fetch(URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newCandidate),
    })
      .then((response) => response.json())
      .then(() => {
        // Refresh the candidate data after adding
        getCandidates();
        // Clear the form fields
        setNewCandidate({ fullName: '', email: '', phone: '', bestRole: '' });
        // Close the modal
        setShowModal(false);
      })
      .catch((error) => console.error("Error adding candidate:", error.message));
  };

  return (
    <div>
      <h1>Candidate Pipeline</h1>

      <Button variant="success" onClick={() => setShowModal(true)}>
        Add New Candidate
      </Button>
      <table striped bordered hover variant="secondary">
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
          {columns[0].map((candidate) => (
            <tr key={candidate.id}>
              <td id="rowColor">{editMode === candidate.id ? <input type="text" value={editedCandidate.fullName} onChange={(e) => setEditedCandidate({ ...editedCandidate, fullName: e.target.value })} /> : candidate.fullName}</td>
              <td id="rowColor">{editMode === candidate.id ? <input type="email" value={editedCandidate.email} onChange={(e) => setEditedCandidate({ ...editedCandidate, email: e.target.value })} /> : candidate.email}</td>
              <td id="rowColor">{editMode === candidate.id ? <input type="phone" value={editedCandidate.phone} onChange={(e) => setEditedCandidate({ ...editedCandidate, phone: e.target.value })} /> : candidate.phone}</td>
              <td id="rowColor">{editMode === candidate.id ? <input type="text" value={editedCandidate.bestRole} onChange={(e) => setEditedCandidate({ ...editedCandidate, bestRole: e.target.value })} /> : candidate.bestRole}</td>
              <td id="rowColor">
                {editMode === candidate.id ? (
                  <div>
                    <Button variant="success" onClick={handleSave}>Save</Button>
                    <Button variant="danger" onClick={() => setEditMode(null)}>Cancel</Button>
                  </div>
                ) : (
                  <div>
                    <Button variant="info" onClick={() => handleEdit(candidate)}>Edit</Button>
                  </div>
                )}
              </td>
              <td id="rowColor">
                <Button onClick={() => handleDelete(candidate.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

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

