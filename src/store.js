import {reactive} from 'vue'
import  axios  from 'axios'

export const store=reactive({

    filmList: [],
    serieList: {},
    chiavePersonale: "0a3d2afb65565f6fcd3dcc7395b2b5bc",
    searchText: "",
    filtro: "",
    sigleBandiere:{
        en: "us.svg",
        fr: "fr.svg",
        de: "de.svg",
        es: "es.svg",
        pt: "pt.svg",
        tr: "tr.svg",
        it: "it.svg"
    },
    linkImmagine: "https://image.tmdb.org/t/p/w342"
    
})

export function fetchFilms(){

    axios.get(`https://api.themoviedb.org/3/search/movie`, {
        params:{

            api_key: store.chiavePersonale,
            query: store.filtro

        }
    }).then((response) => {

        store.filmList = response.data.results;
    })

}

export function fetchSerie(){

    axios.get('https://api.themoviedb.org/3/search/tv',{
        params:{

            api_key:store.chiavePersonale,
            query:store.filtro

        }
    }).then((response) => {

        store.serieList = response.data.results;
    })
}