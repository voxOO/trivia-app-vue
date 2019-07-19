import Chuck from 'chucknorris-io';

export default class ChuckService {
    constructor() {
       this.client = new Chuck();
    }

    getRandomJoke () {
        return this.client.getRandomJoke()
    }

}

export const chuckService = new ChuckService();
