class Xotaker extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 5;
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    yntrelVandak(character) {
        this.getNewCoordinates();
        return super.yntrelVandak(character);
    }
    bazmanal() {
        if (this.kerats == 10) {
            var norVandak = random(this.yntrelVandak(0));
            if (norVandak.length == 0) {
                norVandak = random(this.yntrelVandak(1));
                for (var i in grassArr) {
                    if (grassArr[i].x == norVandak[0] && grassArr[i].y == norVandak[1]) {
                        grassArr.splice(i, 1);
                        xotakerArr.push(new Xotaker(norVandak[0], norVandak[1]));
                        matrix[norVandak[1]][norVandak[0]] = 2;
                    }
                }
            }
            else {
                xotakerArr.push(new Xotaker(norVandak[0], norVandak[1]));
                matrix[norVandak[1]][norVandak[0]] = 2;
            }
        }
    }
    satkel() {
        if (this.energy <= 0) {
            for (var i in xotakerArr) {
                if (xotakerArr[i].x == this.x && xotakerArr[i].y == this.y) {
                    matrix[this.y][this.x] = 0;
                    xotakerArr.splice(i, 1);
                    break;
                }
            }
        }
    }
    sharjvel() {
        var norVandak = random(this.yntrelVandak(0));
        if (norVandak) {
            matrix[norVandak[1]][norVandak[0]] = 2;
            matrix[this.y][this.x] = 0;
            this.x = norVandak[0];
            this.y = norVandak[1];
        }
        this.energy--;
        this.kerats = 0;
    }
    utel() {
        var norVandak = random(this.yntrelVandak(1));
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            this.x = norVandak[0];
            this.y = norVandak[1];
            for (var i in grassArr) {
                if (grassArr[i].x == this.x && grassArr[i].y == this.y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }
            matrix[this.y][this.x] = 2;
            this.energy = 5;
            this.kerats++;

        }
        else {
            this.sharjvel();
        }
    }
}
