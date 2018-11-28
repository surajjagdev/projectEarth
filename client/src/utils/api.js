//import for CRUD methods
import axios from 'axios';
//export for usuage
export default {
  //create a new user with userEmail, startDate, endDate
  newUser: function(data) {
    return axios.post('/api/personal/mycalendar', data);
  },
  //find all
  findEverything: function() {
<<<<<<< HEAD
<<<<<<< HEAD
    return axios.get("/api/personal/mycalendar");
  },
  //update one startdate endate
  updateDate: function(id, data) {
    return axios.put("/api/personal/mycalendar/update" + id, data);
  },
  //Create a new task in the db
  newTask: function(data) {
    return axios.post("/api/personal/todos", data);
  },
  //Find all of the to dos in the database
  findAllToDos: function() {
    return axios.get("/api/personal/todos");
  },
  //Update the to dos in the database
  updateToDos: function(id, data) {
    return axios.put("/api/personal/todos/update" + id, data);
=======
    return axios.get('/api/personal/mycalendar');
  } /*
  //update one startdate endate
  updateDate: function(id, data) {
    return axios.put('/api/personal/mycalendar/update' + id, data);
  },*/,
  findOne: function(data) {
    return axios.get('/api/personal/mycalendar/one', {
      params: {
        userEmail: data.userEmail
      }
    });
  },
  findTodaysEvent: function(data) {
    return axios.get('/api/personal/mycalendar/events', {
      params: {
        userEmail: data.userEmail,
        date: data.date
      }
    });
>>>>>>> aeb9254498fa6e63b5f1211043bebfa3c4b7086a
=======
    return axios.get('/api/personal/mycalendar');
  },
  //update one startdate endate
  updateDate: function(id, data) {
    return axios.put('/api/personal/mycalendar/update' + id, data);
  },
  //Create a new task in the db
  newTask: function(data) {
    return axios.post('/api/personal/todos', data);
  },
  //Find all of the to dos in the database
  findAllToDos: function() {
    return axios.get('/api/personal/todos');
  },
  //Update the to dos in the database
  updateToDos: function(id, data) {
    return axios.put('/api/personal/todos/update' + id, data);
>>>>>>> 178d25c88765038116955f9558b485c5ca715af1
  }
};

/*//import for CRUD methods
import axios from "axios";
//export for usuage
export default {
  //insert requests here
  //save a new user from firebase; insert request into firebase callback
  newUser: function(data) {
    return axios.post('/api/personal/mycalendar', data);
  },
  //find user by id, id is passed as params; change on controller directory if needed
  findUser: function(id) {
    return axios.get('/api/personal/mycalendar/' + id);
  },
  //update user's start date and end date for calendar
  addEvent: function(id) {
    return axios.get('/api/personal/mycalendar/' + id);
  }
};
*/
