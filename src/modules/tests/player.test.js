import Player from "../player";

describe("Player class testing", () => {
    let test_player;
    beforeEach(() => {
        test_player = new Player("Brenton");
    });

    test("Test getName method", () => {
        expect(test_player.getName()).toBe("Brenton");
    });

    test("Test that same move cannot be made twice", () => {
        test_player.attack(5);
    });
})