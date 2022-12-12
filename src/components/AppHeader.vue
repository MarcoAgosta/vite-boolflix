<template>
    <div class="p-3">
        <input type="text">
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
        }
    }
}

</script>

<style scoped lang="scss">

</style>