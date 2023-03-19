import { ref } from "vue";
import { projectAuth } from "@/firebase/config";

const error = ref("");
const logIn = async (email, password) => {
    error.value = null;
    try {
        const res = await projectAuth.signInWithEmailAndPassword(email, password);
        error.value = null;
        // console.log(res);
        return res;
    } catch (err) {
        console.log(err.value);
        error.value = "Incorrect log in attempt! Try again please."
    }
};

const useLogIn = () => {
    return {logIn, error}
};

export default useLogIn;