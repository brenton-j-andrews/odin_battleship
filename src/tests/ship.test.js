import { TheTest  } from "../modules/ship.js";

describe("does this shit work?", () => {
    test("how about this shit?", () => {
        let object = new TheTest();
        expect(typeof(object)).toBe("object");
    })
});