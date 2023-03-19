import { ref } from "vue";
import { projectFirestore } from "../firebase/config";

const useDocument = (collection, id) => {
  let error = ref(null);
  
  const deleteDoc = async (id) => {
    let docRef = projectFirestore.collection(collection).doc(id);
    error.value = null;
    try {
      const res = await docRef.delete();
      return res;
    } catch (err) {
      console.log(err.message);
      error.value = "could not delete the note!";
    }
  };
 
  return { error, deleteDoc };
};

export default useDocument;
