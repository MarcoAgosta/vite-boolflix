<template>
    <li>
        <div class="mb-5">
            <h4>Titolo: {{ singoloFilm.title }}</h4>
            <span class="d-block">Titolo originale: {{ singoloFilm.original_title }}</span>
            <img class="bandiera m-1" v-if="(singoloFilm.original_language in store.sigleBandiere)"
                :src="convertiBandiera(singoloFilm.original_language)" :alt="(singoloFilm.original_language)">
            <img v-else class="bandiera" src='../assets/xx.svg' alt="">
            <span class="d-block">Voto medio: {{ singoloFilm.vote_average }}</span>
        </div>
    </li>
</template>

<script>
import { store } from "../store"

export default {
    data() {
        return {
            store
        }
    },
    props: {
        singoloFilm: {
            original_language: String,
            original_title: String,
            title: String,
            vote_average: Number
        }
    },
    methods: {
        convertiBandiera(sigla) {
            if (sigla in store.sigleBandiere) {
                return new URL(`../assets/${store.sigleBandiere[sigla]}`, import.meta.url)
            }
        }
    }
}
</script>

<style scoped lang="scss">
.bandiera {
    width: 15%;
}
</style>