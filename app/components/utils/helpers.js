import Axios from "axios";

export default {
    
    postMember: (email, password) => {
        return Axios.post("/api", {
            email: email,
            password: password
        }).then(function(response){
            console.log(response.data);
        });
    }
};