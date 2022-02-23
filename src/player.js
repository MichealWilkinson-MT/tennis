class Player {
    _points = 0;
    getPoints = () => {
        return this._points;
    };
    scorePoint = () => {
        if (this._points == 15) {
            this._points = 30
        } else {
            this._points = 15
        } 
    }
}


module.exports = {
    Player
}