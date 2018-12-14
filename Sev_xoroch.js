class Sev_xoroch extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index);
        this.bazmanal = 150;
        this.kerats = 0;
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
        if (this.kerats >= 200) {
            var x = Math.floor(Math.random() * (m - 1));
            var y = Math.floor(Math.random() * (n - 1));
            sev_xorochArr.push(new Sev_xoroch(x, y));
            this.kerats = 0;
        }
    }
    anhetanal() {
        if (this.bazmanal <= 0) {
            matrix[this.y][this.x] = 0;
            matrix[this.y][this.x + 1] = 0;
            matrix[this.y + 1][this.x] = 0;
            matrix[this.y + 1][this.x + 1] = 0;
            for (var i in sev_xorochArr) {
                if (sev_xorochArr[i].x == this.x && sev_xorochArr[i].y == this.y) {
                    sev_xorochArr.splice(i, 1);
                }
            }
        }
    }
    utel() {
        matrix[this.y][this.x] = 5;
        matrix[this.y][this.x + 1] = 5;
        matrix[this.y + 1][this.x] = 5;
        matrix[this.y + 1][this.x + 1] = 5;
        this.multiply--;
        var harevanner = this.yntrelVandak();
        if (harevanner) {
            for (var i in harevanner) {
                if (matrix[harevanner[i][1]][harevanner[i][0]] == 2) {
                    matrix[harevanner[i][1]][harevanner[i][0]] = 0;
                    this.kerats += 10;
                    for (var j in xotakerArr) {
                        if (xotakerArr[j].x == [harevanner[i][0]] && xotakerArr[j].y == [harevanner[i][1]]) {
                            xotakerArr.splice(j, 1);
                        }
                    }
                }
                else if (matrix[harevanner[i][1]][harevanner[i][0]] == 3) {
                    matrix[harevanner[i][1]][harevanner[i][0]] = 0;
                    this.kerats += 20;
                    for (var j in gishatichArr) {
                        if (gishatichArr[j].x == [harevanner[i][0]] && gishatichArr[j].y == [harevanner[i][1]]) {
                            gishatichArr.splice(j, 1);
                        }
                    }
                }
                else if (matrix[harevanner[i][1]][harevanner[i][0]] == 4) {
                    matrix[harevanner[i][1]][harevanner[i][0]] = 0;
                    this.kerats += 30;
                    for (var j in mardArr) {
                        if (mardArr[j].x == [harevanner[i][0]] && mardArr[j].y == [harevanner[i][1]]) {
                            mardArr.splice(j, 1);
                        }
                    }
                }
            }
        }
    }
}
