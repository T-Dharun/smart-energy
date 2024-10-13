import axios from "axios";

export const fetchChatResponse = async (prompt) => {
    
    try {
        // Wait for the response from the axios POST request
        const response = await axios.post("http://localhost:3002/api/generate", {
            prompt: prompt
        });
        
        // Log the response data
        return response.data;
    } catch (error) {
        // Handle and log the error if the request fails
        console.error("Error fetching chat response:", error);
        throw error; 
    }
};
