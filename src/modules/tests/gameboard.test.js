import Gameboard from "../gameboard.js";
import Ship from "../ship.js";

describe("Gameboard class testing", () => {
    let new_board;
    let testCarrier;
    let testPatrolBoat
    beforeEach(() => {
        new_board = new Gameboard(4);
        testCarrier = new Ship("carrier", 5);
        testPatrolBoat = new Ship("patrol boat", 2);
    })

    test("new_board has 100 cells", () => {
        expect(new_board.board.length).toBe(100);
    })

    test("new_board can place new ship horizontally", () => {
        new_board.placeShip(testCarrier, "x", 3);
        expect(new_board.board[6].isShip).toBe(true);
    })

    test("new_board can place ship vertically", () => {
        new_board.placeShip(testPatrolBoat, "y", 1);
        expect(new_board.board[11].isShip).toBe(true);
    })

    test("ship collision: two ship placements collide, same index, difference axis", () => {
        new_board.placeShip(testCarrier, "x", 1);
        new_board.placeShip(testPatrolBoat, "y", 1);
        expect(new_board.board[1].shipType).toBe("carrier");
    })

    test("ship collision: two ship placements collide, different indices, same axis", () => {
        new_board.placeShip(testCarrier, "x", 1);
        new_board.placeShip(testPatrolBoat, "x", 5);
        expect(new_board.board[5].shipType).toBe("carrier");
    })

    test("ship collision: two ship placements collide, different indicies, difference axis", () => {
        new_board.placeShip(testCarrier, "x", 25);
        new_board.placeShip(testPatrolBoat, "y", 17);
        expect(new_board.board[17].shipType).toBe(null);
    })

    test("edge case: ship placement goes beyond vertical edge", () => {
        new_board.placeShip(testCarrier, "x", 7);
        expect(new_board.board[9].shipType).toBe(null);
    })

    test("edge case: ship placement goes beyond horizontal edge", () => {
        new_board.placeShip(testCarrier, "y", 77);
        expect(new_board.board[77].shipType).toBe(null);
    })

})