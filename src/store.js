import {reactive} from 'vue'
import  axios  from 'axios'

export const store=reactive({

    filmList: [],
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
    }
    
})

export function fetchFilms(){

    axios.get(`https://api.themoviedb.org/3/search/movie`, {
        params:{

            api_key: store.chiavePersonale,
            query: store.filtro

        }
    }).then((response) => {

        store.filmList = response.data.results;
        console.log(store.filmList)
    })

}