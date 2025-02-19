const Ship = require("../src/game/ship.js"); // Import Ship from ship.js

describe("Ship Factory Function", () => {
  test("Ship initializes with correct length", () => {
    const ship = Ship(3);
    expect(ship.getLength()).toBe(3);
  });

  test("Ship starts with 0 hits", () => {
    const ship = Ship(4);
    expect(ship.getHits()).toBe(0);
  });

  test("hit() increases hit count", () => {
    const ship = Ship(5);
    ship.hit();
    expect(ship.getHits()).toBe(1);
  });

  test("Ship is not sunk initially", () => {
    const ship = Ship(2);
    expect(ship.isSunk()).toBe(false);
  });

  test("Ship sinks when hit its length times", () => {
    const ship = Ship(3);
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(true);
  });

  test("hit() does not increase hits beyond ship length", () => {
    const ship = Ship(4);
    ship.hit();
    ship.hit();
    ship.hit();
    ship.hit();
    ship.hit(); // Extra hit beyond length
    expect(ship.getHits()).toBe(4); // Should stay at max length
    expect(ship.isSunk()).toBe(true);
  });

  test("Each ship type has the correct length", () => {
    const carrier = Ship(5);
    const battleship = Ship(4);
    const cruiser = Ship(3);
    const submarine = Ship(3);
    const destroyer = Ship(2);

    expect(carrier.getLength()).toBe(5);
    expect(battleship.getLength()).toBe(4);
    expect(cruiser.getLength()).toBe(3);
    expect(submarine.getLength()).toBe(3);
    expect(destroyer.getLength()).toBe(2);
  });
  //ships
  test("Each ship type sinks correctly", () => {
    const ships = [
      { name: "Carrier", ship: Ship(5) },
      { name: "Battleship", ship: Ship(4) },
      { name: "Cruiser", ship: Ship(3) },
      { name: "Submarine", ship: Ship(3) },
      { name: "Destroyer", ship: Ship(2) },
    ];

    ships.forEach(({ ship }) => {
      for (let i = 0; i < ship.getLength(); i++) {
        ship.hit();
      }
      expect(ship.isSunk()).toBe(true);
    });
  });
});
