const {
    Game
} = require('../game');

describe('who scored', () => {

    xit('Ask who scored the point, Player1 or Player2', () => {
        const game = new Game();
        expect(game.whoScored()).toEqual("Who Scored?")
})
})