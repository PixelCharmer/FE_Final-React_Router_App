
// pulling a mock api to dynamically be used in the CRUD functions 

const URL = "https://65a21c3d42ecd7d7f0a723e6.mockapi.io/pipeline";


// fetches the list of candidates from the API with a GET method
// returns a promise that resolves to the array of cabdidate objects
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

// can add a new candidate to the API with the POST method
// returns a promise that resolves to the added candidate object
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

// abilty to update existing candidates currently in the array using the PUT method
// returns a promise that resolves to the updated candidates object
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

// creates the option to delete indiviual objects with the index number using the DELETE method
// returns a promise that resolves to the deleted candidate objects
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
