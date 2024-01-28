
// pulling a mock api to dynamically be used in the CRUD functions 

const URL = "https://659afe2cd565feee2daabf11.mockapi.io/api/tracker";

// fetches the list of tracker from the API with a GET method
// returns a promise that resolves to the array of tracker objects
export const getTracker = async () => {
  try {
    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error("Failed to fetch tracker");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching tracker:", error.message);
  }
};

// abilty to update existing trackers currently in the array using the PUT method
// returns a promise that resolves to the updated tracker object
export const updateTracker = async (editedTracker) => {
  try {
    const response = await fetch(`${URL}/${editedTracker.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editedTracker),
    });
    if (!response.ok) {
      throw new Error("Failed to update tracker");
    }
    return response.json();
  } catch (error) {
    console.error("Error updating tracker:", error.message);
  }
};

// creates the option to delete indiviual objects with the index number using the DELETE method
// returns a promise that resolves to the deleted tracker objects
export const deleteTracker = async (trackerId) => {
  try {
    const response = await fetch(`${URL}/${trackerId}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Failed to delete tracker");
    }
    return response.json();
  } catch (error) {
    console.error("Error deleting tracker:", error.message);
  }
};

// can add a new tracker to the API with the POST method
// returns a promise that resolves to the added tracker object
export const addTracker= async (newTracker) => {
  try {
    const response = await fetch(URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTracker),
    });
    if (!response.ok) {
      throw new Error("Failed to add tracker");
    }
    return response.json();
  } catch (error) {
    console.error("Error adding tracker:", error.message);
  }
};
