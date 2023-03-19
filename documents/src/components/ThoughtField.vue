<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <form @submit.prevent="handleSubmit">
                    <div class="mt-5 shadow p-3 mb-5 bg-body-tertiary rounded">
                        <label for="exampleFormControlTextarea1" class="form-label font-monospace mt-5 text-dark">
                        Write your note here
                        </label>
                        <textarea v-model="message" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        <div class="text-center">   
                            <button v-if="message" class="btn btn-warning mt-2 font-monospace"> Sent </button> 
                        </div>
                    </div>
                </form>
                <div class="fw-bolder text-danger"> {{ error }} </div>
                <div v-if="noteDone">
                    <router-link :to="{name: `allnotes`}" class="text-decoration-none text-warning font-monospace">
                        Your note created. Click here for go to all notes
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import getUser from '@/composables/getUser';
import { timestamp } from '@/firebase/config';
import useCollection from "../composables/useCollection";

    export default {
        setup (props) {
            const { user } = getUser();
            const message = ref("");
            const { addDoc, error } = useCollection("notes");
            const noteDone = ref(false);
            const handleSubmit = async () => {
                const note = {
                    name: user.value.displayName,
                    message: message.value,
                    userID: user.value.uid,
                    createdAt: timestamp(),
                };
                // console.log(note);
                await addDoc(note);
                noteDone.value = true;
                if (!error.value) {
                    message.value = "";
                };
            };
            
            return { message, handleSubmit, error, noteDone };
        },
    };
</script>

<style scoped>

</style>