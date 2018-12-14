class Mard extends Gishatich {
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
    animal_direction() {
        this.anilam_direction = [];
        for (var i = 0; i < n; i++) {
            this.animal_direction[i] = [];
            this.animal_direction[i][0] = this.x;
            this.animal_direction[i][1] = i;
        }
        for (var i = n; i < m + n; i++) {
            this.animal_direction[i] = [];
            this.animal_direction[i][0] = i - n;
            this.animal_direction[i][1] = this.y;
        }
    }
    yntrelKendani() {
        this.animal_direction();
        var found = [];
        for (var i in this.animal_direction) {
            var x = this.animal_direction[i][0];
            var y = this.animal_direction[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == 2 || matrix[y][x] == 3) {
                    found.push(this.animal_direction[i]);
                }
            }

        }
        return found;
    }
    bazmanal() {
        if (this.kerats >= 100) {
            var norVandak = random(this.yntrelVandak(0));
            if (!norVandak) {
                norVandak = random(this.yntrelVandak(1));
                for (var i in grassArr && norVandak) {
                    if (grassArr[i].x == norVandak[0] && grassArr[i].y == norVandak[1]) {
                        grassArr.splice(i, 1);
                        mardArr.push(new Mard(norVandak[0], norVandak[1]));
                        matrix[norVandak[1]][norVandak[0]] = 4;
                    }
                }
            }
            else if (norVandak) {
                mardArr.push(new Mard(norVandak[0], norVandak[1]));
                matrix[norVandak[1]][norVandak[0]] = 4;
            }
        }
    }
    mahanal() {
        if (this.energy <= 0) {
            for (var i in mardArr) {
                if (mardArr[i].x == this.x && mardArr[i].y == this.y) {
                    matrix[this.y][this.x] = 0;
                    mardArr.splice(i, 1);
                    break;
                }
            }
        }
    }
    sharjvel() {
        var norVandak = random(this.yntrelVandak(0));
        if (norVandak) {
            matrix[norVandak[1]][norVandak[0]] = 4;
            matrix[this.y][this.x] = 0;
            this.x = norVandak[0];
            this.y = norVandak[1];
            this.grass = false;
        }
        this.energy--;
        this.kerats = 0;
    }
    utel() {
        var norVandak = random(this.yntrelKendani());
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            this.x = norVandak[0];
            this.y = norVandak[1];
            if (matrix[this.y][this.x] = 2) {
                for (var i in xotakerArr) {
                    if (xotakerArr[i].x == this.x && xotakerArr[i].y == this.y) {
                        xotakerArr.splice(i, 1);
                        this.kerats += 10;
                        break;
                    }
                }
            }
            else {
                for (var i in gishatichArr) {
                    if (gishatichArr[i].x == this.x && gishatichArr[i].y == this.y) {
                        gishatichArr.splice(i, 1);
                        this.kerats += 20;
                        break;
                    }
                }
            }
            matrix[this.y][this.x] = 4;
            this.energy = 25;
            this.grass = false;
        }
        else {
            norVandak = random(this.yntrelVandak(1));
            if (norVandak) {
                matrix[norVandak[1]][norVandak[0]] = 4;
                matrix[this.y][this.x] = 0;
                this.x = norVandak[0];
                this.y = norVandak[1];
                for (var i in grassArr) {
                    if (grassArr[i].x == this.x && grassArr[i].y == this.y) {
                        grassArr.splice(i, 1);
                        break;
                    }
                }
                this.kerats += 5;
            }
            else {
                this.sharjvel();
            }
        }
    }
}
