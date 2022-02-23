const { points, Player } = require("../player");

describe("Get player points", () => {
  it("Given a player has 0 points, when retrieving their points, then we get 0", () => {
    const player = new Player();
    expect(player.getPoints()).toEqual(0);
  });

  it("Given a player has scored 1 point, when retrieving their points, then we get 15", () => {
    const player = new Player();
    player.scorePoint();
    expect(player.getPoints()).toEqual(15);
  });

  it("Given a player has scored 2 points, when retrieving their points, then we get 30", () => {
    const player = new Player();
    player.scorePoint();
    player.scorePoint();
    expect(player.getPoints()).toEqual(30);
  });
});

describe("Get player points", () => {
  it("Given a player has 0 points, when retrieving their points, then we get 0", () => {
    expect(points(0)).toEqual(0);
  });
  it("Given a player has 1 points, when retrieving their points, then we get 15", () => {
    expect(points(1)).toEqual(15);
  });
  it("given a player has 2 points, when retrieving their points, then we get 30", () => {
    expect(points(2)).toEqual(30);
  });
  it("given a player has 3 points, when retrieving their points, then we get 40", () => {
    expect(points(3)).toEqual(40);
  });
});
