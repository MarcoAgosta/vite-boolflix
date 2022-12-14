<template>
    <div class="p-3 background-b d-flex justify-content-between align-items-center w-100">
        <div>
            <h1 class="color-red">Boolflix</h1>
        </div>
        <div>
            <form class="d-flex" role="search" action="#">
                <input class="form-control me-2" type="search" v-model="store.filtro" placeholder="Search Media" aria-label="Search-media">
                <button class="btn btn-outline-light" type="submit" @click="onSearch">Search</button>
            </form>
        </div>
    </div>
</template>

<script>
import { store } from "../store"
export default {
    data() {
        return {
            store,
        }
    },
    methods: {
        onSearch() {
            this.$emit("searchFilms")
            this.$emit("searchSerie")
        }
    }
}

</script>

<style scoped lang="scss">
.background-b {
    background-color: black;
}

.color-red {
    color: red;
}
</style>