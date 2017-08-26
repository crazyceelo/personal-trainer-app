import Axios from "axios";

export default {
    
    postMember: (fullName, password) => {
        return Axios.post("/api", {
            fullName: fullName,
            password: password
        }).then(function(response){
            console.log(response.data);
        });
    }
}