class Player {
    _points = 0;
    getPoints = () => {
        return this._points;
    };
    scorePoint = () => {
        if(this._points == 0) {
            this._points = 15;
          }
          else if(this._points == 15) {
            this._points = 30;
          }
          else if (this._points == 30) {
            this._points = 40;
          }
    };

};
module.exports = {
    Player
}