// api.js

const URL = "https://65a21c3d42ecd7d7f0a723e6.mockapi.io/pipeline";

export const getCandidates = async () => {
  try {
    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error("Failed to fetch candidates");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching candidates:", error.message);
    throw error;
  }
};

export const addCandidate = async (newCandidate) => {
  try {
    const response = await fetch(URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newCandidate),
    });
    if (!response.ok) {
      throw new Error("Failed to add candidate");
    }
    return response.json();
  } catch (error) {
    console.error("Error adding candidate:", error.message);
    throw error;
  }
};

export const updateCandidate = async (editedCandidate) => {
  try {
    const response = await fetch(`${URL}/${editedCandidate.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editedCandidate),
    });
    if (!response.ok) {
      throw new Error("Failed to update candidate");
    }
    return response.json();
  } catch (error) {
    console.error("Error updating candidate:", error.message);
    throw error;
  }
};

export const deleteCandidate = async (candidateId) => {
  try {
    const response = await fetch(`${URL}/${candidateId}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Failed to delete candidate");
    }
    return response.json();
  } catch (error) {
    console.error("Error deleting candidate:", error.message);
    throw error;
  }
};
