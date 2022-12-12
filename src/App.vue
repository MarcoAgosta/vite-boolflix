<script>
import { store, fetchFilms } from "./store"
import Header from "./components/AppHeader.vue"
import Main from "./components/AppMain.vue"

export default{
    data(){

    },
    methods:{
        ricercaFilms(){
            fetchFilms()
        }
    },
    components: {Header, Main}
}
</script>

<template>

<Header @searchFilms="ricercaFilms"></Header>
<Main></Main>

</template>

<style lang="scss">
@use "./styles/general.scss"

</style>
