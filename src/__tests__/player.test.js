const {
    Player
} = require('../player');
const {
    Game
} = require('../game')

describe('Get player points', () => {
    it('Given a player has 0 points, when retrieving their points, then we get 0', () => {
        const player = new Player();
        expect(player.getPoints()).toEqual(0);
    });

    it('Given a player has scored 1 point, when retrieving their points, then we get 15', () => {
        const player = new Player();
        player.scorePoint();
        expect(player.getPoints()).toEqual(15);
    });

    it('Given a player has scored 2 points, when retrieving their points, then we get 30', () => {
        const player = new Player();
        player.scorePoint();
        player.scorePoint();
        expect(player.getPoints()).toEqual(30);
    });

    it('Given a player has scored 3 points, when retrieving their points, then we get 40', () => {
        const player = new Player();
        player.scorePoint();
        player.scorePoint();
        player.scorePoint();
        expect(player.getPoints()).toEqual(40);
    });

    it('Given a player has scored 4 points, they win the game', () => {
        const player = new Player
        player.scorePoint();
        player.scorePoint();
        player.scorePoint();
        player.scorePoint();
        expect(player.getPoints()).toEqual("You Win")
    })
})

describe('2 players', () => {
    it('Make sure there are two different players', () => {
        const player = new Player();
        expect(player.createPlayer()).toEqual("player1" && "player2")
    })
})

describe('Douce', () => {
    xit('If both players have 40 score they will enter douce', () => {
        const player = new Player();

        expect(player.playersDouce()).toEqual("Douce")
    })
})

describe('who scored', () => {

    xit('Ask who scored the point, Player1 or Player2', () => {
        const game = new Game();
        expect(game.whoScored()).toEqual("Who Scored?")
})
})