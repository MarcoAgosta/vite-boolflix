<template>
    <li>
        <div class="mb-5">
            <h4>Titolo: {{ singolaSerie.name }}</h4>
            <span class="d-block">Titolo originale: {{ singolaSerie.original_name }}</span>
            <img class="bandiera m-1" v-if="(singolaSerie.original_language in store.sigleBandiere)"
                :src="convertiBandiera(singolaSerie.original_language)" :alt="(singolaSerie.original_language)">
            <img v-else class="bandiera" src='../assets/xx.svg' alt="">
            <span class="d-block">Voto medio: {{ singolaSerie.vote_average }}</span>
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
        singolaSerie: {
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