import { chuckService } from './../services/ChuckService'


export const ChuckStoreModule = {
    state : {
        randomjoke: null
    },
    mutations: {
        setRandomJoke( state , payload) {
            state.randomjoke = payload
        }
    },
    actions: {
      getRandomJoke( context ,payload) {
          chuckService.getRandomJoke().
          then ( (joke) => {
              context.commit(`setRandomJoke`, joke)
          })
      }
    },
    getters: {
        getJoke(state) {
            return state.randomjoke
    }
  }
}