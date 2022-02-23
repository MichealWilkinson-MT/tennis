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

// Easier way to understand the tests

const points = (scoredPoints) => {
    if (scoredPoints == 1 ) {
        return 15;
    } else if (scoredPoints == 2 ) {
        return 30;
    } else if (scoredPoints == 3) {
        return 40;
    } else {
        return 0;
    }
}

module.exports = {
 points, Player
}