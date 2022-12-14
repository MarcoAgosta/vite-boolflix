<template>
    <li>
        <div class="mb-5">
            <h4>Titolo: {{ singoloMedia.title }}</h4>
            <img :src="creaLocandina(singoloMedia.poster_path)">
            <span class="d-block">Titolo originale: {{ singoloMedia.original_title }}</span>
            <img class="bandiera m-1" v-if="(singoloMedia.original_language in store.sigleBandiere)"
                :src="convertiBandiera(singoloMedia.original_language)" :alt="(singoloMedia.original_language)">
            <img v-else class="bandiera" src='../assets/xx.svg' alt="">
            <span class="d-block">Voto medio: 
                <i class="fa-solid fa-star" v-for="i in creaVotoStelle(singoloMedia.vote_average)"></i>
                <i class="fa-regular fa-star" v-for="i in 5-creaVotoStelle(singoloMedia.vote_average)"></i>
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
        singoloMedia: {
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
        creaLocandina(immagine){
            const locandina = `${store.linkImmagine}${immagine}`
            if (immagine){
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