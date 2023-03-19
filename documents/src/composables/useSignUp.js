import { ref } from "vue";
import { projectAuth } from "@/firebase/config";


const error = ref("");
const signUp = async ( email, password,  displayName) => {
    error.value = null;
    try {
       const res = await projectAuth.createUserWithEmailAndPassword(  email, password ); 
       if (!res) {
        throw new Error("Your sign up is not able to complete!");
       };
    //    console.log(res.user)
       await res.user.updateProfile({ displayName });
       error.value = null;
       return res;
    } catch (err) {
        console.log(err.message);
        error.value = err.message;
    }
};
const useSignUp = () => {
    return { error, signUp };
}

export default useSignUp;