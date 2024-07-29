import axios from 'axios';


class Crud {
    //CRUD for reminders
    //Create
    create (task) {
        console.log("creating");
        console.log(task);
        const url = 'http://localhost:8080/api/tasks';
        return axios.post(url, task)
            .then(function (response) {
                console.log('created task with id: ' + task.id);
                // handle success
                return response; //.data["hydra:member"];
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }
    //Retrieve
    retrieve () {
        console.log("retrieving");
        return axios.get('http://192.168.254.158:8080/api/tasks/')
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
        const url = `http://localhost:8080/api/tasks/${task.id}`;
        console.log("deleting");
        console.log(url);

        return axios.delete(url)
            .then(function (response) {
                console.log('deleted task with id: ' + task.id);
                // handle success
                return response; //.data["hydra:member"];
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }
}

export default Crud;