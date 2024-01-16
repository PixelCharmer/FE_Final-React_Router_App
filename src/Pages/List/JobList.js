// JobList.js

import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import AddJobModal from './AddJobModal';

const JobList = () => {
  const URL = "https://65a214e042ecd7d7f0a71bff.mockapi.io/joblist";
  const [jobs, setJobs] = useState([]);
  const [editMode, setEditMode] = useState(null);
  const [editedJob, setEditedJob] = useState({});
  const [newJob, setNewJob] = useState({ job: '', description: '', hiringManager: '' });
  const [showModal, setShowModal] = useState(false);

  const getJobs = async () => {
    try {
      const response = await fetch(URL);
      if (!response.ok) {
        throw new Error("Failed to fetch jobs");
      }
      const data = await response.json();
      setJobs(data);
    } catch (error) {
      console.error("Error fetching jobs:", error.message);
    }
  };

  useEffect(() => {
    getJobs();
  }, []);

  const splitIntoColumns = (data, columns) => {
    const result = Array.from({ length: columns }, (_, index) =>
      data.filter((_, dataIndex) => dataIndex % columns === index)
    );
    return result;
  };

  const columns = splitIntoColumns(jobs, 6); // Adjust the number of columns as needed

  const handleEdit = (job) => {
    setEditMode(job.id);
    setEditedJob({ ...job });
  };

  const handleSave = () => {
    fetch(`${URL}/${editedJob.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editedJob),
    })
      .then((response) => response.json())
      .then(() => {
        setEditMode(null);
        getJobs();
      })
      .catch((error) => console.error("Error saving job:", error.message));
  };

  const handleDelete = (jobId) => {
    fetch(`${URL}/${jobId}`, {
      method: "DELETE",
    })
      .then(() => {
        getJobs();
      })
      .catch((error) => console.error("Error deleting job:", error.message));
  };

  const handleAddJob = () => {
    fetch(URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newJob),
    })
      .then((response) => response.json())
      .then(() => {
        getJobs();
        setNewJob({ job: '', description: '', hiringManager: '' });
        setShowModal(false);
      })
      .catch((error) => console.error("Error adding job:", error.message));
  };

  return (
    <div>
      <h1>Job List</h1>

      <Button variant="success" onClick={() => setShowModal(true)}>
        Add New Job
      </Button>
      <table striped bordered hover variant="secondary">
        <thead>
          <tr>
            <th id="tableColor">Job</th>
            <th id="tableColor">Description</th>
            <th id="tableColor">Hiring Manager</th>
            <th id="tableColor">Update</th>
            <th id="tableColor">Delete</th>
          </tr>
        </thead>
        <tbody id="rowColor">
          {columns[0].map((job) => (
            <tr key={job.id}>
              <td id="rowColor">{editMode === job.id ? <input type="text" value={editedJob.job} onChange={(e) => setEditedJob({ ...editedJob, job: e.target.value })} /> : job.job}</td>
              <td id="rowColor">{editMode === job.id ? <textarea value={editedJob.description} onChange={(e) => setEditedJob({ ...editedJob, description: e.target.value })} /> : job.description}</td>
              <td id="rowColor">{editMode === job.id ? <input type="text" value={editedJob.hiringManager} onChange={(e) => setEditedJob({ ...editedJob, hiringManager: e.target.value })} /> : job.hiringManager}</td>
              <td id="rowColor">
                {editMode === job.id ? (
                <div>
                  <Button variant="success" onClick={handleSave}>Save</Button>
                  <Button variant="danger" onClick={() => setEditMode(null)}>Cancel</Button>
                </div>
                ) : (
                <div>
                  <Button variant="info" onClick={() => handleEdit(job)}>Edit</Button>
                </div>
                )}
              </td>
              <td id="rowColor">
                  <Button onClick={() => handleDelete(job.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <AddJobModal
        showModal={showModal}
        handleClose={() => setShowModal(false)}
        handleAddJob={handleAddJob}
        newJob={newJob}
        setNewJob={setNewJob}
      />
    </div>
  );
};

export default JobList;
