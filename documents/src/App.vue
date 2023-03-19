<template>
  <div class=" background" :class="theme === `light` ? `bg-body text-dark` : `bg-dark text-light` ">
    <div @click="changeTheme" class="text-center font-monospace userNone">
      Change Theme
      <span v-if="theme === `dark`"> <i class="fa-regular fa-lightbulb"></i> </span>
      <span v-else="theme === `light`"> <i class="fa-regular fa-moon"></i> </span>
    </div>
    <NavBar />
    <router-view/>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import { ref } from 'vue';

export default {
  components : {
    NavBar
  },
  setup () {
    const theme = ref("light");

    const changeTheme = () => {
      theme.value = theme.value == "light" ? "dark" : "light";
    };

    return { theme, changeTheme }
  }
}
</script>
<style>
.background {
  min-height: 100vh;
}
.userNone {
  user-select: none;
  cursor: pointer;
}
</style>
