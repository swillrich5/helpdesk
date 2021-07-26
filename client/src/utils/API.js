/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

export default {
  // Gets all requests
  getRequests: function() {
    return axios.get("/api/requests");
  },
  // Gets the request with the given id
  getRequest: function(id) {
    return axios.get("/api/requests/" + id);
  },
  // Deletes the request with the given id
  deleteRequest: function(id) {
    return axios.delete("/api/requests/" + id);
  },
  // Saves a request to the database
  saveRequest: function(requestData) {
    return axios.post("/api/books", requestData);
  },
      // Updates a request to the database
      updateTrip: function(id, tripData) {
        return axios.put(("/api/trips/" + id), tripData);
    }
};
