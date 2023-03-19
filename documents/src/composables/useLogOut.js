import { ref } from "vue";
import { projectAuth } from "@/firebase/config";

const error = ref("");
const logOut = async () => {
    error.value = null;
    try {
        await projectAuth.signOut();
    } catch (err) {
       console.log(err.message);
       error.value = err.message;    
    }
};

const useLogOut = () => {
    return { error, logOut }
};

export default useLogOut;