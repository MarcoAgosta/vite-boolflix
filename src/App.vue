<script>
import { store, fetchFilms, fetchSerie } from "./store"
import Header from "./components/AppHeader.vue"
import Main from "./components/AppMain.vue"

export default{
    data(){
        return {
            store
        }
    },
    methods:{
        ricercaFilms(){
            fetchFilms()
        },
        ricercaSerie(){
            fetchSerie()
        }
    },
    components: {Header, Main}
}
</script>

<template>

<Header @searchFilms="ricercaFilms" @searchSerie="ricercaSerie"></Header>
<Main></Main>

</template>

<style lang="scss">
@use "./styles/general.scss"

</style>
