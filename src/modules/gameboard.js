import { throwStatement } from "@babel/types";
import shipTypes from "../utilities/shipTypes";


class Gameboard {

    constructor() {
        this.board = this.initBoard();
        this.ships = [];
        this.hitIndex = [];
        this.sunkShips = 0;
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

            // Add ship object to ships array.
            this.ships.push(ship);

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

    // Method that receives an attack, updates ship object status and hitIndex.
    receiveAttack(index) {
        this.board[index].isHit = true;
        this.hitIndex.push(index);

        // Direct hit!
        if (this.board[index].isShip) {
            let ship_name = this.board[index].shipType;
            let hit_ship = this.ships.find(function(ship) {
                if (ship.name === ship_name);
                return ship;
            });

            hit_ship.addHit(index);
            if (hit_ship.isSunk()) {
                this.sunkShips ++;
            }
        }
    }

    // Method to check if all ships on the board are sunk -> game over!
    areAllShipsSunk() {
        return (this.sunkShips == this.ships.length) ? true : false;
    }
}

export default Gameboard;
