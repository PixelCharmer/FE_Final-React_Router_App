import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import AddTrackerModal from './AddTrackerModal';
import { getTracker, updateTracker, deleteTracker, addTracker } from './trackerCRUD';
import Table from "react-bootstrap/Table";

const CandidateTracker = () => {

    const [Trackers, setTrackers] = useState([]);
    const [editMode, setEditMode] = useState(null);
    const [editedTracker, setEditedTracker] = useState({});
    const [newTracker, setNewTracker] = useState({ candidateName: '', jobTitle: '', stage: '' });
    const [showModal, setShowModal] = useState(false);

    const getTrackersData = async () => {
        try {
            const data = await getTracker();
            setTrackers(data);
        } catch (error) {
            console.error("Error fetching Trackers:", error.message);
        }
    };

    useEffect(() => {
        getTrackersData();
    }, []);

    const splitIntoColumns = (data, columns) => {
        const result = Array.from({ length: columns }, (_, index) =>
            data.filter((_, dataIndex) => dataIndex % columns === index)
        );
        return result;
    };

    const columns = splitIntoColumns(Trackers, 5); // Adjust the number of columns as needed

    const handleEdit = (Tracker) => {
        setEditMode(Tracker.id);
        setEditedTracker({ ...Tracker });
    };

    const handleSave = async () => {
        try {
            await updateTracker(editedTracker);
            setEditMode(null);
            getTrackersData();
        } catch (error) {
            console.error("Error saving Tracker:", error.message);
        }
    };

    const handleDelete = async (TrackerId) => {
        try {
            await deleteTracker(TrackerId);
            getTrackersData();
        } catch (error) {
            console.error("Error deleting Tracker:", error.message);
        }
    };

    const handleAddTracker = async () => {
        try {
            await addTracker(newTracker);
            getTrackersData();
            setNewTracker({ candidateName: '', jobTitle: '', stage: '' });
            setShowModal(false);
        } catch (error) {
            console.error("Error adding Tracker:", error.message);
        }
    };

       // creating the table for the API data to populate
    return (
        <div className='container-fluid'>
            <h1 id="header">CANDIDATE STATUS TRACKER</h1>

            <Button id="creation" onClick={() => setShowModal(true)}>
                Add New Candidate
            </Button>
            <Table striped bordered hover id="trackerTable">
                <thead>
                    <tr>
                        <th id="tableColor">Candidate Name</th>
                        <th id="tableColor">Job Title</th>
                        <th id="tableColor">Status</th>
                        <th id="tableColor">Update</th>
                        <th id="tableColor">Delete</th>
                    </tr>
                </thead>
                <tbody id="rowColor">
                    {columns.map((column) => (
                        column.map((Tracker) => (
                            <tr key={Tracker.id}>
                                <td id="rowColor">
                                    {editMode === Tracker.id ? (
                                        <input
                                            type="text"
                                            value={editedTracker.candidateName}
                                            onChange={(e) => setEditedTracker({ ...editedTracker, candidateName: e.target.value })}
                                        />
                                    ) : (
                                        Tracker.candidateName
                                    )}
                                </td>

                                <td id="rowColor">
                                    {editMode === Tracker.id ? (
                                        <input
                                            type="text"
                                            value={editedTracker.jobTitle}
                                            onChange={(e) => setEditedTracker({ ...editedTracker, jobTitle: e.target.value })}
                                        />
                                    ) : (
                                        Tracker.jobTitle
                                    )}
                                </td>
                                <td id="rowColor">
                                    {editMode === Tracker.id ? (
                                        <select
                                            id="stageInput"
                                            name="stage"
                                            value={editedTracker.stage}
                                            onChange={(e) => setEditedTracker({ ...editedTracker, stage: e.target.value })}
                                        >
                                            <option value="Under Review">Under Review</option>
                                            <option value="Interviewing">Interviewing</option>
                                            <option value="Pending Feedback">Pending Feedback</option>
                                            <option value="Offer Extended">Offer Extended</option>
                                            <option value="Offer Rescinded">Offer Rescinded</option>
                                            <option value="Offer Accepted">Offer Accepted</option>
                                            <option value="Offer Rejected">Offer Rejected</option>
                                        </select>
                                    ) : (
                                        Tracker.stage
                                    )}
                                </td>

                                <td id="rowColor">
                                    {editMode === Tracker.id ? (
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
                                            <Button id="edit" onClick={() => handleEdit(Tracker)}>
                                                Edit
                                            </Button>
                                        </div>
                                    )}
                                </td>
                                <td id="rowColor">
                                    <Button id="delete" onClick={() => handleDelete(Tracker.id)}>Delete</Button>
                                </td>
                            </tr>
                        ))
                    ))}
                </tbody>
            </Table>

            {/* a popup occurs to add new records to the API data */}
            <AddTrackerModal
                showModal={showModal}
                handleClose={() => setShowModal(false)}
                handleAddTracker={handleAddTracker}
                newTracker={newTracker}
                setNewTracker={setNewTracker}
            />
        </div>
    );
};

export default CandidateTracker;
