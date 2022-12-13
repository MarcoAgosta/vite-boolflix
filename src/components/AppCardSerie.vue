<template>
    <li>
        <div class="mb-5">
            <h4>Titolo: {{ singolaSerie.name }}</h4>
            <img :src="creaLocandina(singolaSerie.poster_path)">
            <span class="d-block">Titolo originale: {{ singolaSerie.original_name }}</span>
            <img class="bandiera m-1" v-if="(singolaSerie.original_language in store.sigleBandiere)"
                :src="convertiBandiera(singolaSerie.original_language)" :alt="(singolaSerie.original_language)">
            <img v-else class="bandiera" src='../assets/xx.svg' alt="">
            <span class="d-block">Voto medio: 
                <i class="fa-solid fa-star" v-for="i in creaVotoStelle(singolaSerie.vote_average)"></i>
                <i class="fa-regular fa-star" v-for="i in 5-creaVotoStelle(singolaSerie.vote_average)"></i>
            </span>
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
            vote_average: Number,
            poster_path: String
        }
    },
    methods: {
        convertiBandiera(sigla) {
            if (sigla in store.sigleBandiere) {
                return new URL(`../assets/${store.sigleBandiere[sigla]}`, import.meta.url)
            }
        },

        creaLocandina(immagine) {
            const locandina = `${store.linkImmagine}${immagine}`
            if (immagine) {
                return locandina
            }
        },

        creaVotoStelle(voto){
            const numeroStelle = Math.ceil(voto/2)
            return numeroStelle
        }

    }
}
</script>

<style scoped lang="scss">
.bandiera {
    width: 15%;
}
</style>