import Axios from "axios";

export default {
    
    postMember: (x, y) => {
        return Axios.post("/api", {
            fullName: x,
            password: y
        }); //promise look at axios documentation
    }
}