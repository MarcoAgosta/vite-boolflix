<template>
<div class="main flex-grow-1">
    <h2 class="m-4 white" v-if="(!store.filmList.length==0)">FILM</h2>
    <div class="d-flex w-100 flex-wrap justify-content-around mb-5">
        <Card v-for="elemento in store.filmList" :singolo-media="elemento"></Card>
    </div>
    <h2 class="m-4 white"  v-if="(!store.serieList.length==0)">Serie TV</h2>
    <div class="d-flex w-100 flex-wrap justify-content-around">
        <Card v-for="elemento in store.serieList" :singolo-media="elemento"></Card>
    </div>
</div>
</template>

<script>
import {store} from "../store"
import Card from "./AppCard.vue"

export default{
    data(){
        return {
            store,
        }
    },
    components: {Card}
}
</script>

<style scoped lang="scss">
.main{
    overflow-y: scroll;
}
.white{
    color: white;
}
</style>