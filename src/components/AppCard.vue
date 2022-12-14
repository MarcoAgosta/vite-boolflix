<template>
    <li>
        <div class="mb-5">
            <h4>Titolo: {{ singoloMedia.title }}{{ singoloMedia.name }}</h4>
            <img :src="creaLocandina(singoloMedia.poster_path)">
            <span class="d-block">Titolo originale: {{ singoloMedia.original_title }}{{ singoloMedia.original_name }}
            </span>
            <img class="bandiera m-1" v-if="(singoloMedia.original_language in sigleBandiere)"
                :src="convertiBandiera(singoloMedia.original_language)" :alt="(singoloMedia.original_language)">
            <img v-else class="bandiera" src='../assets/xx.svg' alt="">
            <span class="d-block">Voto medio:
                <i class="fa-solid fa-star" v-for="i in creaVotoStelle(singoloMedia.vote_average)"></i>
                <i class="fa-regular fa-star" v-for="i in 5 - creaVotoStelle(singoloMedia.vote_average)"></i>
            </span>
        </div>
    </li>
</template>

<script>
import { store } from "../store"

export default {
    data() {
        return {
            linkImmagine: "https://image.tmdb.org/t/p/w342",
            sigleBandiere: {
                en: "us.svg",
                fr: "fr.svg",
                de: "de.svg",
                es: "es.svg",
                pt: "pt.svg",
                tr: "tr.svg",
                it: "it.svg"
            },
        }
    },
    props: {
        singoloMedia: {
            original_language: String,
            original_title: String,
            title: String,
            vote_average: Number,
            poster_path: String,
            name: String,
            original_name: String
        }
    },
    methods: {
        convertiBandiera(sigla) {
            if (sigla in this.sigleBandiere) {
                return new URL(`../assets/${this.sigleBandiere[sigla]}`, import.meta.url)
            }
        },
        creaLocandina(immagine) {
            const locandina = `${this.linkImmagine}${immagine}`
            if (immagine) {
                return locandina
            }
        },
        creaVotoStelle(voto) {
            const numeroStelle = Math.ceil(voto / 2)
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