<template>
<li>
    <div class="mb-5">
        <h4>Titolo: {{singoloFilm.title}}</h4>
        <span class="d-block">Titolo originale: {{singoloFilm.original_title}}</span>
        <span class="d-block">Lingua originale: {{singoloFilm.original_language}};</span>
        <span class="d-block">Voto medio: {{singoloFilm.vote_average}}</span>
    </div>
</li>
</template>

<script>
export default{
    props:{
        singoloFilm:{
            original_language: String,
            original_title: String,
            title: String,
            vote_average: Number
        }
    }
}
</script>

<style scoped lang="scss">

</style>