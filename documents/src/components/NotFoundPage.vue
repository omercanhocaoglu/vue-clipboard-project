<template>
    <div>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-6">
                    <p class="text-center text-warning fw-bolder mt-5 fs-2"> No Data Here! </p>
                    <p class="text-center">
                        <router-link class="text-center" :to="{name: `home`}"> Click here for go to home  </router-link>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>