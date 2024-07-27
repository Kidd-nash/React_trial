import axios from 'axios';


class Crud {
    //CRUD for reminders
    //Create
    create (task) {
        console.log("creating");
        console.log(task);
    }
    //Retrieve
    retrieve () {
        console.log("retrieving");
        return axios.get('http://localhost:8080/api/tasks/')
        .then(function (response) {
          // handle success
          return response.data["hydra:member"];
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
          // always executed
        });
    }
    //Update
    update (task) {
        console.log("updating");
        console.log(task);
    }
    //Delete
    delete (task) {
        console.log("deleting");
        console.log(task);
    }
}

export default Crud;