import axios from "axios";

const API_URL = "http://localhost:5000";

export const getServerStatus = async () => {
  try {
    const response = await axios.get(`${API_URL}/status`);
    return response.data.status;
  } catch (error) {
    return "Offline";
  }
};  

export const sampleData = "Hello from API";