const {
    Player
} = require('./player');


class Game{
    _whosPoint = ("Who Scored?");
    /**
     * @param {Player}
     */
    _player1 = {}
    _player2 = {}
    constructor(){
        this._player1 = new Player()
        this._player2 = new Player()
    }

isDeuce = () => {
if (this._player1.getPoints() == 40 && this._player2.getPoints() ==40){
    return true

}
return false
}
playerOneScores = () => {
if (this._player1.getPoints() == 40){
    if (this.isDeuce()){
        //figure out advantage
    }
}
this._player1.scorePoint()
}
playerTwoScores = () => {
    if (this._player2.getPoints() == 40){
        if (this.isDeuce()){
            //figure out advantage
        }
    }
    this._player2.scorePoint()
    }



//whoScored = () => {
    //return this._whosPoint
//}

}











module.exports = {
    Game
}