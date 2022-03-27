import Gameboard from "./gameboard";

class Player {
    constructor(name) {
        this.name = name;
        this.previousHitIndex = [];
    }

    getName() {
        return this.name;
    }

    // Player attack method.
    playerAttack(index, gameboard) {
        if (!this.previousTargetIndex.includes(index)) {
            gameboard.receiveAttack(index);
            this.previousHitIndex.push(index);
        }
    }

    // Random attack method for computer.
    randomAttack(gameboard) {
        let attackIndex = Math.floor(Math.random() * 100);

        // If all squares have been hit, game over!
        if(this.previousHitIndex.length === 100) return;

        while(this.previousHitIndex.includes(attackIndex)) {
            attackIndex = Math.floor(Math.random() * 100);
        }

        gameboard.receiveAttack(attackIndex);
    }
}

export default Player;