// JobList.js

import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import AddJobModal from './AddJobModal';
import { getJobs, updateJob, deleteJob, addJob } from './joblistCRUD';
import Table from "react-bootstrap/Table";

const JobList = () => {
  const URL = "https://65a214e042ecd7d7f0a71bff.mockapi.io/joblist";
  const [jobs, setJobs] = useState([]);
  const [editMode, setEditMode] = useState(null);
  const [editedJob, setEditedJob] = useState({});
  const [newJob, setNewJob] = useState({ reqnumber: '', job: '', description: '', hiringManager: '' });
  const [showModal, setShowModal] = useState(false);

  const getJobsData = async () => {
    try {
      const data = await getJobs();
      setJobs(data);
    } catch (error) {
      console.error("Error fetching jobs:", error.message);
    }
  };

  useEffect(() => {
    getJobsData();
  }, []);

  const splitIntoColumns = (data, columns) => {
    const result = Array.from({ length: columns }, (_, index) =>
      data.filter((_, dataIndex) => dataIndex % columns === index)
    );
    return result;
  };

  const columns = splitIntoColumns(jobs, 7); // Adjust the number of columns as needed

  const handleEdit = (job) => {
    setEditMode(job.id);
    setEditedJob({ ...job });
  };

  const handleSave = async () => {
    try {
      await updateJob(editedJob);
      setEditMode(null);
      getJobsData();
    } catch (error) {
      console.error("Error saving job:", error.message);
    }
  };

  const handleDelete = async (jobId) => {
    try {
      await deleteJob(jobId);
      getJobsData();
    } catch (error) {
      console.error("Error deleting job:", error.message);
    }
  };

  const handleAddJob = async () => {
    try {
      await addJob(newJob);
      getJobsData();
      setNewJob({ reqnumber: '', job: '', description: '', hiringManager: '' });
      setShowModal(false);
    } catch (error) {
      console.error("Error adding job:", error.message);
    }
  };
  return (
    <div>
      <h1 id="header">JOB LIST</h1>

      <Button id="creation" variant="primary" onClick={() => setShowModal(true)}>
        Add New Job
      </Button>
      <Table striped bordered hover variant="secondary">
        <thead>
          <tr>
            <th id="tableColor">Req#</th>
            <th id="tableColor">Job</th>
            <th id="tableColor">Type</th>
            <th id="tableColor">Hiring Manager</th>
            <th id="tableColor">Update</th>
            <th id="tableColor">Delete</th>
          </tr>
        </thead>
        <tbody id="rowColor">
          {columns.map((column, columnIndex) => (
            column.map((job) => (
              <tr key={job.id}>
                <td id="rowColor">
                  {editMode === job.id ? (
                    <input
                      type="text"
                      value={editedJob.reqnumber}
                      onChange={(e) => setEditedJob({ ...editedJob, reqnumber: e.target.value })}
                    />
                  ) : (
                    job.reqnumber
                  )}
                </td>

                <td id="rowColor">
                  {editMode === job.id ? (
                    <input
                      type="text"
                      value={editedJob.job}
                      onChange={(e) => setEditedJob({ ...editedJob, job: e.target.value })}
                    />
                  ) : (
                    job.job
                  )}
                </td>
                <td id="rowColor">
                  {editMode === job.id ? (
                    <textarea
                      value={editedJob.description}
                      onChange={(e) => setEditedJob({ ...editedJob, description: e.target.value })}
                    />
                  ) : (
                    job.description
                  )}
                </td>
                <td id="rowColor">
                  {editMode === job.id ? (
                    <input
                      type="text"
                      value={editedJob.hiringManager}
                      onChange={(e) => setEditedJob({ ...editedJob, hiringManager: e.target.value })}
                    />
                  ) : (
                    job.hiringManager
                  )}
                </td>
                <td id="rowColor">
                  {editMode === job.id ? (
                    <div>
                      <Button variant="success" onClick={handleSave}>
                        Save
                      </Button>
                      <Button variant="danger" onClick={() => setEditMode(null)}>
                        Cancel
                      </Button>
                    </div>
                  ) : (
                    <div>
                      <Button variant="info" onClick={() => handleEdit(job)}>
                        Edit
                      </Button>
                    </div>
                  )}
                </td>
                <td id="rowColor">
                  <Button variant="danger" onClick={() => handleDelete(job.id)}>Delete</Button>
                </td>
              </tr>
            ))
          ))}
        </tbody>
      </Table>

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
