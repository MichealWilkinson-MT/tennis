class Player {
    _points = 0;
    getPoints = () => {
        return this._points;
    };
    scorePoint = () => {
        this._points = 15
    }
}


module.exports = {
    Player
}