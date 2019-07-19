import Chuck from 'chucknorris-io';

export default class ChuckService {
    constructor() {
       this.client = new Chuck();
    }

    getRandomJoke (category = '') {
        return this.client.getRandomJoke(category)
    }

    getJokeCategories () {
        return this.client.getJokeCategories()
    }

}

export const chuckService = new ChuckService();
