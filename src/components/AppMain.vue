<template>
<div>
    <h2 class="m-1">Film:</h2>
    <ul>
        <Card v-for="elemento in store.filmList" :singolo-media="elemento"></Card>
    </ul>
    <h2 class="m-1">Serie TV</h2>
    <ul>
        <Card v-for="elemento in store.serieList" :singolo-media="elemento"></Card>
    </ul>
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

</style>