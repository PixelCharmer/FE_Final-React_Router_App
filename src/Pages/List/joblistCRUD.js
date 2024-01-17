// joblistCRUD.js

const URL = "https://65a214e042ecd7d7f0a71bff.mockapi.io/joblist";

export const getJobs = async () => {
  try {
    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error("Failed to fetch jobs");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching jobs:", error.message);
  }
};

export const updateJob = async (editedJob) => {
  try {
    const response = await fetch(`${URL}/${editedJob.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editedJob),
    });
    if (!response.ok) {
      throw new Error("Failed to update job");
    }
    return response.json();
  } catch (error) {
    console.error("Error updating job:", error.message);
  }
};

export const deleteJob = async (jobId) => {
  try {
    const response = await fetch(`${URL}/${jobId}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Failed to delete job");
    }
    return response.json();
  } catch (error) {
    console.error("Error deleting job:", error.message);
  }
};

export const addJob = async (newJob) => {
  try {
    const response = await fetch(URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newJob),
    });
    if (!response.ok) {
      throw new Error("Failed to add job");
    }
    return response.json();
  } catch (error) {
    console.error("Error adding job:", error.message);
  }
};
