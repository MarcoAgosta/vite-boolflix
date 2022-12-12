import {reactive} from 'vue'
import  axios  from 'axios'

export const store=reactive({

    filmList: [],
    chiavePersonale: "0a3d2afb65565f6fcd3dcc7395b2b5bc",
    searchText: ""
    
})

export function fetchFilms(){

    axios.get(`https://api.themoviedb.org/3/movie/550`, {
        params:{

            api_key: store.chiavePersonale

        }
    }).then((response) => {

        store.filmList = response;
        console.log(store.filmList)
    })

}