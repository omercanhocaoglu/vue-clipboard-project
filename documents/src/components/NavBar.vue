<template>
    <div>
        <div v-if="user" class="container font-monospace d-none d-md-block d-lg-block">
            <div class="d-flex mb-3">
                <div class="p-2">Hi <strong class="text-warning"> {{ user.displayName }} </strong>! </div>
                <div class="p-2">
                    <router-link class="text-decoration-none text-warning hover" :to="{name: `home`}">
                        Home
                    </router-link> 
                </div>
                <div class="p-2">
                    <router-link class="text-decoration-none text-warning hover" :to="{name: `thoughtfield`}">
                        Write Note
                    </router-link> 
                </div>
                <div class="p-2">
                    <router-link class="text-decoration-none text-warning hover" :to="{name: `allnotes`}">
                        All Notes
                    </router-link> 
                </div>
                <div class="ms-auto btn btn-warning" @click="handleLogOut">Log out</div>
            </div>
        </div>
        <!-- there is a navbar below for mobile phones -->
        <div v-if="user" class="container font-monospace d-block d-sm-none">
            <div class="d-flex row mb-3 justify-content-center">
                <div class="p-2 text-center">Hiii <strong class="text-warning"> {{ user.displayName }} </strong>! </div>
                <div class="p-2 text-center">
                    <router-link class="text-decoration-none text-warning hover" :to="{name: `home`}">
                        Home
                    </router-link>
                </div>
                <div class="p-2 text-center">
                    <router-link class="text-decoration-none text-warning hover" :to="{name: `thoughtfield`}">
                        Write Note
                    </router-link>
                </div>
                <div class="p-2 text-center">
                    <router-link class="text-decoration-none text-warning hover" :to="{name: `allnotes`}">
                        All Notes
                    </router-link>
                </div>
                <div class=" btn btn-warning col-4 text-center" @click="handleLogOut">Log out</div>
            </div>
        </div>
    </div>
</template>

<script>
import useLogOut from '@/composables/useLogOut';
import { useRouter } from 'vue-router';
import getUser from '@/composables/getUser';
    export default {
        setup (props) {
            const { error, logOut } = useLogOut(); 
            const { user } = getUser();
            const router = useRouter();
            const handleLogOut = async () => {
                await logOut();
                if ( !error.value ) {
                    // console.log("user logged out!");
                    router.push({ name: "home" })
                }
            }

            return { handleLogOut, user };
        },

    }
</script>

<style scoped>
.hover:hover {
    font-weight: bolder;
    font-style: oblique;
}
</style>