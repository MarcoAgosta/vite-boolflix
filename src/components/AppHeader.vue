<template>
    <div class="p-3">
        <input type="text" v-model="store.filtro">
        <button @click="onSearch">Ricerca</button>
    </div>
</template>

<script>
import {store} from "../store"
export default{
    data(){
        return {
            store,
        }
    },
    methods:{
        onSearch(){
            this.$emit("searchFilms")
            this.$emit("searchSerie")
        }
    }
}

</script>

<style scoped lang="scss">

</style>