<template>
<div>
    <h2 class="m-1">Film:</h2>
    <ul>
        <Cardfilm v-for="film in store.filmList" :singolo-film="film"></Cardfilm>
    </ul>
    <h2 class="m-1">Serie TV</h2>
    <ul>
        <CardSerie v-for="serie in store.serieList" :singola-serie="serie"></CardSerie>
    </ul>
</div>
</template>

<script>
import {store} from "../store"
import Cardfilm from "./AppCardFilm.vue"
import CardSerie from "./AppCardSerie.vue"

export default{
    data(){
        return {
            store,
        }
    },
    components: {Cardfilm, CardSerie}
}
</script>

<style scoped lang="scss">

</style>