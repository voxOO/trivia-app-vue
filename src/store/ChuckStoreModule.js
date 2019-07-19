import { chuckService } from './../services/ChuckService'


export const ChuckStoreModule = {
    state : {
        randomjoke: null,
        categoriesJokes: null
    },
    mutations: {
        setRandomJoke( state , payload) {
            state.randomjoke = payload
        },
        setCategories (state, payload) {
            state.categoriesJokes= payload
        }
    },
    actions: {
      getRandomJoke( context ,payload) {
          chuckService.getRandomJoke(payload).
          then ( (joke) => {
              context.commit(`setRandomJoke`, joke)
          })
      },
      getJokeCategories( context , payload) {
          chuckService.getJokeCategories().
          then ( (categories) => {
              context.commit(`setCategories` , categories)
          })
      }
    },
    getters: {
        getJoke(state) {
            // return state.randomjoke ? state.randomjoke.value : ''
            if (state.randomjoke) {
                return state.randomjoke.value
            }
            return ''
    },
        getCategories(state) {
            return state.categoriesJokes
        }
  }
}