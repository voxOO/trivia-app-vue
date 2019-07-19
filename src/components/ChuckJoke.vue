<template>
    <div>
        <input 
            type="text"
            v-model="category"
        >
        <button @click="getRandomJoke(category)">Get New Joke</button>
        <h4>Choose one of the categories below:</h4>
        <h4> {{ categories }} </h4>
        <h3>{{ joke }}</h3>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    data() {
        return {
            category: ''
        }
    },
    computed:{
        ...mapGetters({
            joke: 'getJoke',
            categories: 'getCategories'
        })
    },
    methods: {
        ...mapActions({
            getRandomJoke: 'getRandomJoke',
            getJokeCategories: 'getJokeCategories'
        }),
    },
    created () {
       this.getJokeCategories(); 
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
