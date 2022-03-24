import shipTypes from "../utilities/shipTypes";


class Gameboard {

    constructor() {
        this.board = this.initBoard();
    }

    // Returns a new gameboard if a testcase board hasn't been provided.
    initBoard() {
        const board = [];
        for(let i = 0; i < 100; i++) {
            board.push({
                isHit: false,
                isShip: false,
                shipType: null
            });
        }
        return board;
    }

    placeShip(ship, axis, index) {
        if (this.checkShipPlacement(ship.length, axis, index)) {

            for (let i = 0; i < ship.length; i++) {
                if (axis === "x") {
                    this.board[index + i].isShip = true;
                    this.board[index + i].shipType = ship.name;
                } 
                
                else if (axis === "y") {
                    this.board[index + (i * 10)].isShip = true;
                    this.board[index + (i * 10)].shipType = ship.name;
                }
            }
        }
    }

    // Method that rejects illegal ship placements. 
    checkShipPlacement(shipLength, axis, index) {

        // Illegal placement case 1: ship goes out of bounds.
        const x_edge_cases = [9, 19, 29, 39, 49, 59, 69, 79, 89, 99];

        for (let i = 0; i < 10; i++) {
            if (index + shipLength > x_edge_cases[i]) return false;
        }

        if (index + shipLength * 10 > 99) {
            return false;
        }


        // Illegal placement case 2: ship already present.
        for (let i = 0; i < shipLength; i++) {
            if (axis === "x") {

                if (this.board[index + i].isShip) {
                    return false;
                }
            } 
            
            else if (axis === "y") {

                if (this.board[index + (i * 10)].isShip) {
                    return false;
                }
            }
        }

         
        return true;
    }
}

export default Gameboard;
