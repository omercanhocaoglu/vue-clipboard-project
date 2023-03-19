<template>
     <div class="mt-5">
        <div class="shadow p-3 mb-5 bg-body-tertiary rounded">
            <h1 class="text-center text-dark"> Log in </h1>

            <form @submit.prevent="handleSubmit" class="text-center">
                <input class="input border border-dark border-2 rounded-3 mt-1" type="email" required placeholder="E-Mail" v-model="email"> <br>
                <input class="input border border-dark border-2 rounded-3 mt-1" type="password" required placeholder="Password" v-model="password">
                <div class="text-danger fw-bolder"> {{ error }} </div>
                <button class="mt-1 btn btn-warning"> Login </button>
            </form>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import useLogIn from "../composables/useLogIn";
import { useRouter } from 'vue-router';

    export default {
        setup (props, context) {
            const email = ref("");
            const password = ref("");
            const { error, logIn } = useLogIn();
            const router = useRouter();
            const handleSubmit = async () => {
                // console.log( email.value, password.value )
                await logIn( email.value, password.value );
                if (!error.value) {
                    context.emit("login");
                    // console.log("user Logged in!")
                }
                email.value = "";
                password.value = "";
                router.push({name: "thoughtfield"})
            }

            return { email, password, handleSubmit, error };
        }
    }
</script>

<style scoped>

</style>