var matrix = [];
var n = 70;
var m = 70;
var side = 8;
var xot_tokos = 65;
var xotaker_tokos = 10;
var gishatich_tokos = 10;
var mard_tokos = 10;
var sev_xoroch_tokos = 1;
for (var y = 0; y < n; y++) {
    matrix[y] = [];
    for (var x = 0; x < m; x++) {
        matrix[y][x] = 0;
    }
}
for (var i = 0; i < n * m / 100 * xot_tokos; i++) {
    var x = Math.floor(Math.random() * m);
    var y = Math.floor(Math.random() * n);
    while (matrix[y][x] != 0) {
        x = Math.floor(Math.random() * m);
        y = Math.floor(Math.random() * n);
    }
    matrix[y][x] = 1;
}
for (var i = 0; i < n * m / 100 * xotaker_tokos; i++) {
    var x = Math.floor(Math.random() * m);
    var y = Math.floor(Math.random() * n);
    while (matrix[y][x] != 0) {
        x = Math.floor(Math.random() * m);
        y = Math.floor(Math.random() * n);
    }
    matrix[y][x] = 2;
}
for (var i = 0; i < n * m / 100 * gishatich_tokos; i++) {
    var x = Math.floor(Math.random() * m);
    var y = Math.floor(Math.random() * n);
    while (matrix[y][x] != 0) {
        x = Math.floor(Math.random() * m);
        y = Math.floor(Math.random() * n);
    }
    matrix[y][x] = 3;
}
for (var i = 0; i < n * m / 100 * mard_tokos; i++) {
    var x = Math.floor(Math.random() * m);
    var y = Math.floor(Math.random() * n);
    while (matrix[y][x] != 0) {
        x = Math.floor(Math.random() * m);
        y = Math.floor(Math.random() * n);
    }
    matrix[y][x] = 4;
}
for (var i = 0; i < n * m / 100 * sev_xoroch_tokos / 4; i++) {
    var x = Math.floor(Math.random() * (m - 1));
    var y = Math.floor(Math.random() * (n - 1));
    while (x < 0 || y < 0 || x >= n || y >= m || (matrix[y][x] != 0 && matrix[y + 1][x] != 0 && matrix[y][x + 1] != 0 && matrix[y + 1][x + 1] != 0)) {
        x = Math.floor(Math.random() * (m - 1));
        y = Math.floor(Math.random() * (n - 1));
    }
    matrix[y][x] = 5;
    matrix[y + 1][x + 1] = 5;
}
var grassArr = [];
var xotakerArr = [];
var gishatichArr = [];
var mardArr = [];
var sev_xorochArr = [];
function setup() {
    frameRate(30);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#ececec');
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                grassArr.push(new Grass(x, y));
            }
            else if (matrix[y][x] == 2) {
                xotakerArr.push(new Xotaker(x, y));
            }
            else if (matrix[y][x] == 3) {
                gishatichArr.push(new Gishatich(x, y));
            }
            else if (matrix[y][x] == 4) {
                mardArr.push(new Mard(x, y));
            }
            else if (matrix[y][x] == 5 && matrix[y + 1][x + 1] == 5) {
                sev_xorochArr.push(new Sev_xoroch(x, y));
            }
        }
    }
    strokeWeight(1);
}

function draw() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                fill("red");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill("orange");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {
                fill("black");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill("#ececec");
                rect(x * side, y * side, side, side);
            }
        }
    }
    for (var i in grassArr) {
        grassArr[i].bazmanal();
    }
    for (var i in xotakerArr) {
        xotakerArr[i].utel();
        xotakerArr[i].bazmanal();
        xotakerArr[i].satkel();
    }
    for (var i in gishatichArr) {
        gishatichArr[i].utel();
        gishatichArr[i].bazmanal();
        gishatichArr[i].satkel();
    }
    for (var i in mardArr) {
        mardArr[i].utel();
        mardArr[i].bazmanal();
        mardArr[i].mahanal();
    }
    for (var i in sev_xorochArr) {
        sev_xorochArr[i].utel();
        sev_xorochArr[i].bazmanal();
        sev_xorochArr[i].anhetanal();
    }
}
