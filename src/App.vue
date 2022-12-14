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
<div class="app">
    <Header @searchFilms="ricercaFilms" @searchSerie="ricercaSerie"></Header>
    <Main></Main>
</div>
</template>

<style lang="scss">
@use "./styles/general.scss";

.app{
    height: 100vh;
    width: 100vw;
    background-color: rgb(97, 97, 97);
}
</style>
