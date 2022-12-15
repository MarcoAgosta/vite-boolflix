<template>
    <div>
        <div class="mb-5 elemento position-relative">
            <img class="locandina h-100 w-100" v-if="(singoloMedia.poster_path)"
                :src="creaLocandina(singoloMedia.poster_path)">
            <div v-else class="w-100 h-100 locandina bg-white"></div>
            <div class="position-absolute top-0 w-100 h-100 informazioni p-2">
                <h4>Titolo: {{ singoloMedia.title }}{{ singoloMedia.name }}</h4>
                <span class="d-block">
                    <h6 class="d-inline">Titolo originale:</h6> {{ singoloMedia.original_title }}{{
                            singoloMedia.original_name
                    }}
                </span>
                <span class="d-block mt-1 mb-1">
                    <h6 class="d-inline">Voto medio:</h6>
                    <i class="fa-solid fa-star" v-for="i in creaVotoStelle(singoloMedia.vote_average)"></i>
                    <i class="fa-regular fa-star" v-for="i in 5 - creaVotoStelle(singoloMedia.vote_average)"></i>
                </span>
                <span>
                    <h6 class="d-inline">Overview:</h6> {{ singoloMedia.overview }}
                </span>
                <div class="m-5"></div>
            </div>
            <img class="bandiera" v-if="(singoloMedia.original_language in sigleBandiere)"
                :src="convertiBandiera(singoloMedia.original_language)" :alt="(singoloMedia.original_language)">
            <img v-else class="bandiera" src='../assets/xx.svg' alt="">
        </div>
    </div>
</template>

<script>

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
                it: "it.svg",
                ja: "jp.svg"
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
            original_name: String,
            overview: String
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
.fa-star {
    color: rgb(255, 187, 0);
}

;

.elemento {
    width: 342px;
    height: 512px;
    border: 1px solid white
}

;

.elemento:hover {
    .informazioni {
        visibility: visible;
        opacity: 1;
    }

    .bandiera {
        visibility: visible;
        opacity: 1;
    }
}

.bandiera {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 25%;
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s, opacity 0.5s linear;
}

;

.informazioni {
    background-color: black;
    color: white;
    overflow: auto;
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s, opacity 0.5s linear;
}

;
</style>