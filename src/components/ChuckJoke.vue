<template>
    <div>
        <h1>{{ joke.value }}</h1>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    computed:{
        ...mapGetters({
            joke: 'getJoke'
        })
    },
    methods: {
        ...mapActions({
            getRandomJoke: 'getRandomJoke'
        })
    },
    created () {
        
    },
    beforeRouteEnter (to , from , next) {
        next( vm => {
            vm.getRandomJoke();
        })
    }
}
</script>

<style>

</style>
