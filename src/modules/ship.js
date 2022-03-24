class Ship {

    constructor(name, length) {
        this.name = name;
        this.length = length;
        this.hitArray = [];
    }

    getLength() {
        return this.length;
    }

    addHit(index) {
        // Check that index isn't in array already.
        if (!this.hitArray.includes(index)) {
            this.hitArray.push(index);
        }
    }

    isSunk() {
        if (this.hitArray.length == this.length) {
            return true;
        } return false;
    }
}

export default Ship;