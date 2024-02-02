import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import AddJobModal from './AddJobModal';
import { getJobs, updateJob, deleteJob, addJob } from './joblistCRUD';
import Table from "react-bootstrap/Table";

// creating the table and setting up the data and props to have CRUD fuctions used 

const JobList = () => {

  {/* created the state hooks that will be called in the CRUD fuctions */}

  const [jobs, setJobs] = useState([]);
  const [editMode, setEditMode] = useState(null);
  const [editedJob, setEditedJob] = useState({});
  const [newJob, setNewJob] = useState({ reqnumber: '', job: '', description: '', hiringManager: '' });
  const [showModal, setShowModal] = useState(false);


  // fetching the job data from the API and updates the state
  const getJobsData = async () => {
    try {
      const data = await getJobs();
      setJobs(data);
    } catch (error) {
      console.error("Error fetching jobs:", error.message);
    }
  };

  // using a hook  to fetch job data when the component mounts
  useEffect(() => {
    getJobsData();
  }, []);

  //  takes the API list and splits the data into columns for display
  const splitIntoColumns = (data, columns) => {
    const result = Array.from({ length: columns }, (_, index) =>
      data.filter((_, dataIndex) => dataIndex % columns === index)
    );
    return result;
  };

  const columns = splitIntoColumns(jobs, 6);

    // handles the update CRUD operation 
    const handleEdit = (job) => {
    setEditMode(job.id);
    setEditedJob({ ...job });
  };

  // saves the updated data to the API
  const handleSave = async () => {
    try {
      await updateJob(editedJob);
      setEditMode(null);
      getJobsData();
    } catch (error) {
      console.error("Error saving job:", error.message);
    }
  };

  // handles the delete CRUD operation 
  const handleDelete = async (jobId) => {
    try {
      await deleteJob(jobId);
      getJobsData();
    } catch (error) {
      console.error("Error deleting job:", error.message);
    }
  };

  // handles the create CRUD operation 
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

  // creating the table for the API data to populate
  return (
    <div className='container-fluid'>
      <h1 id="header">JOB OPENINGS LIST</h1>

      <Button id="creation" onClick={() => setShowModal(true)}>
        Add New Job
      </Button>
      <Table striped bordered hover id="jobTable">
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
          {columns.map((column) => (
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
                      <Button id="save" onClick={handleSave}>
                        Save
                      </Button>
                      <Button id="cancel" onClick={() => setEditMode(null)}>
                        Cancel
                      </Button>
                    </div>
                  ) : (
                    <div>
                      <Button id="edit" onClick={() => handleEdit(job)}>
                        Edit
                      </Button>
                    </div>
                  )}
                </td>
                <td id="rowColor">
                  <Button id="delete" onClick={() => handleDelete(job.id)}>Delete</Button>
                </td>
              </tr>
            ))
          ))}
        </tbody>
      </Table>

      {/* a popup occurs to add new records to the API data */}
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
