const {
    Game
} = require('../game');

describe('who scored', () => {

   xit('Ask who scored the point, Player1 or Player2', () => {
        const game = new Game();
        expect(game.whoScored()).toEqual("Who Scored?")
})
})

describe('isDeuce', () => {
    it('If both players have 40 score they will enter douce', () => {
        const _player1 = new Game();
        const _player2 = new Game();
        const game = new Game()
        expect(game.isDeuce()).toEqual(false)
    })
})