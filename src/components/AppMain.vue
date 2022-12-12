<template>
<div>
    <ul>
        <Card v-for="film in filmList"></Card>
    </ul>
</div>
</template>

<script>
import {store} from "../store"
import Card from "./AppCard.vue"

export default{
    data(){
        return {
            store,
        }
    },
    components: {Card}
}
</script>

<style scoped lang="scss">

</style>