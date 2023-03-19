<template>
  <div class="home">
    <div class="container">
      <div class="row justify-content-center">
        <h1 class="text-center font-monospace">Welcome to Clipboard App!</h1>
        <div v-if="!user" class="col-md-4 font-monospace">
          <div v-if="showForm">
            <SignUpForm @signup="enterThoughtField" />
            <div class="text-center">
              <p class="mt-3"> Do you have an account? </p>
              <span class="fw-bolder cursorPointer" @click="showForm = false"> click here to log in </span>
            </div>
          </div>
          
          <div v-else="!showForm">
            <LogInForm @login="enterThoughtField" />
            <div class="text-center">
              <p class="mt-3"> No account yet? </p>
              <span class="fw-bolder cursorPointer" @click="showForm = true"> click here to sign up </span>
            </div>
          </div>
        </div>

        <div v-else="user" class="text-center shadow p-3 mb-5 bg-body-tertiary rounded">
          <p>
            <router-link :to="{name:`thoughtfield`}" class="text-decoration-none text-dark">
              Hey <span class="font-monospace fs-5 text-warning"> {{ user.displayName }} </span> !
              <span class="fw-bolder"> click here for go to write note </span>
            </router-link>
          </p>
          <p class="text-dark">  
            <span class="fw-bolder">
              {{ documents.length }}
            </span> 
            notes has been writen so far.
          </p>
        </div>
      </div><!-- end of row -->
    </div><!-- end of container -->
  </div>
</template>

<script>
import SignUpForm from '@/components/SignUpForm.vue';
import LogInForm from '@/components/LogInForm.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import getUser from '@/composables/getUser';
import getCollection from '@/composables/getCollection';

export default {
  name: 'Home',
  components: {
   SignUpForm,
   LogInForm
  },
  setup () {
    const showForm = ref(false);
    const router = useRouter();
    const { user } = getUser();
    const { documents, error } = getCollection("notes");

    const enterThoughtField = () => {
      router.push({name:"thoughtfield"})
    };

    return { showForm, enterThoughtField, user, documents }
  }

}
</script>

<style>
.background {
  background-color: black;
  min-height: 100vh;
}
.cursorPointer {
    user-select: none;
    cursor: pointer;
}
</style>