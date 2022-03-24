import Ship from "../ship.js";


describe("Ship class tests", () => {
    let testCarrier;
    let testPatrolBoat;

    beforeEach(() => {
        testCarrier = new Ship("carrier", 5);
        testPatrolBoat = new Ship("patrolBoat", 2);
    });

    test("Type of returned value", () => {
        expect(typeof(testCarrier)).toBe("object");
    }),

    test("Test 'hit' method, single hit", () => {
        testCarrier.addHit(2);
        expect(testCarrier.hitArray.length).toBe(1);
    })

    test("Test 'hit' method, multiple hits", () => {
        testCarrier.addHit(0);
        testCarrier.addHit(1);
        testCarrier.addHit(3);
        expect(testCarrier.hitArray.length).toBe(3);
    })

    test("Test that 'hit' method won't count duplicate hits", () => {
        testCarrier.addHit(0);
        testCarrier.addHit(0);
        expect(testCarrier.hitArray.length).toBe(1);
    })

    test("Test 'isSunk' when not sunk", () => {
        testPatrolBoat.addHit(0);
        expect(testPatrolBoat.isSunk()).toBe(false);
    })

    test("Test 'isSunk' when sunk", () => {
        testPatrolBoat.addHit(0);
        testPatrolBoat.addHit(1);
        expect(testPatrolBoat.isSunk()).toBe(true);
    })
});