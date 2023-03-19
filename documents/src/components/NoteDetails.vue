<template>
    <div>
        <div class="container">
            <div class="row justify-content-center">
                <h1 class="font-monospace text-center">All Notes</h1>
               
                <div class="text-center" v-if="formatedNotes == 0">
                    <div class="makeBox card text-bg-warning mb-3"> 
                        <div class="card-header">
                            from 
                            <span class="fs-3 fw-bolder"> Admin </span>
                            <button type="button" class="btn-close float-end mt-2" data-bs-dismiss="alert" aria-label="Close"></button>  
                        </div>
                        <div class="card-body">
                            <p class="card-text font-monospace"> Heey this is my note to clipboard Please add your note! </p>
                            <p class="card-text text-end fw-lighter"> Written by Admin </p>  
                        </div>
                    </div>
                </div>

                <div class="makeBox card text-bg-warning mb-3" v-for="note in formatedNotes" :key="note.id"> 
                    <div class="card-header">
                        from 
                        <span class="fs-3 fw-bolder"> {{ note.name }} </span>
                        <button @click="handleDelete(note.id)" type="button" class="btn-close float-end mt-2" data-bs-dismiss="alert" aria-label="Close"></button>  
                    </div>
                    <div class="card-body">
                        <p class="card-text font-monospace"> {{ note.message }} </p>
                        <p class="card-text text-end fw-lighter"> {{ note.createdAt }} </p>  
                    </div>
                </div>
                <div> {{ error }} </div>
            </div> <!-- end of row -->
        </div> <!-- end of container -->
    </div>
</template>

<script>
import getCollection from '@/composables/getCollection';
import useDocument from "../composables/useDocuments";
import getUser from '@/composables/getUser';
import { formatDistanceToNow } from "date-fns";
import { computed } from 'vue';

export default {
    setup (props) {
        const { deleteDoc } = useDocument("notes");
        const { documents, error } = getCollection("notes");
        const {user} = getUser();

        const formatedNotes = computed(() => {
            if (documents.value) {
                return documents.value.map((doc) => {
                let time = formatDistanceToNow(doc.createdAt.toDate());
                return { ...doc, createdAt: time };
                });
                }
            });
            const handleDelete = async (id) => {
                await deleteDoc(id)
            };

        return {formatedNotes, handleDelete, error}
    }
}
</script>

<style scoped>
.makeBox {
    border-radius: 10px;
    width: 250px;
    min-height: 300px;
    float: left;
    margin: 5px;
}
.userNone {
    user-select: none;
    cursor: pointer;
}

</style>