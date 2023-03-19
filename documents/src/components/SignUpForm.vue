<template>
     <div class="mt-5">
        <div class="shadow p-3 mb-5 bg-body-tertiary rounded">
            <h1 class="text-center text-dark"> Sign up </h1>
            
            <form @submit.prevent="handleSubmit" class="text-center">
            <input class="input border border-dark border-2 rounded-3 mt-1" type="text" required placeholder="Nick Name" v-model="displayName"> <br>
            <input class="input border border-dark border-2 rounded-3 mt-1" type="email" required placeholder="E-Mail" v-model="email"> <br>
            <input class="input border border-dark border-2 rounded-3 mt-1" type="password" required placeholder="Password" v-model="password"> <br>
            <div class="text-danger fw-bolder"> {{ error }} </div>
            <button class="mt-1 btn btn-warning"> Sign Up </button>
        </form>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import useSignUp from '@/composables/useSignUp';
import { useRouter } from 'vue-router';
    export default {
        setup (props, context) {
            const { error, signUp } = useSignUp();
            const displayName = ref("");
            const email = ref("");
            const password = ref("");
            const router = useRouter();
            const handleSubmit = async () => {
                // console.log( displayName.value, email.value, password.value );
                await signUp( email.value, password.value, displayName.value );
                if (!error.value) {
                    context.emit("signup")
                }
                displayName.value = "";
                email.value = "";
                password.value = "";
                router.push({name: "thoughtfield" })
            };

            return { displayName, email, password, handleSubmit, error };
        }
    }
</script>


<style scoped>

</style>