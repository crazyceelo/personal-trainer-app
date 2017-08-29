import Axios from "axios";

export default {
    
    postMember: (email, password) => {
        return Axios.post("/api-member", {
            email: email,
            password: password
        }).then(function(response){
            console.log(response.data);
        });
    },

    postTrainer: (email, specialization, address1, address2, city, state, zip, description) => {
        return Axios.post("/api-trainer",{
            email: email,
            specialization: specialization,
            address1: address1,
            address2: address2,
            city: city,
            state: state,
            zip: zip,
            description: description
        }).then(function(response){
            console.log(response.data);
        })
    },

    getLocalTrainers: (zip) => {
        if (zip){
            console.log("zip-test");
        }

        return Axios.get("/api-trainer?ID="+ id)
    }
};