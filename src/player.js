
class Player {
    _points = 0;
    _player1 = "player1"
    _player2 = "player2"
    getPoints = () => {
        return this._points
    };
    scorePoint = () => {
        if (this._points == 0) {
            this._points = 15
        } else if (this._points == 15) {
            this._points = 30
        } else if (this._points == 30){
            this._points = 40
        }
    }
    createPlayer = () => {
        return this._player1 && this._player2
    }


}


module.exports = {
    Player
}