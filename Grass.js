class Grass extends LivingCreature {

    bazmanal() {
        this.bazmanal++;
        var newCell = random(this.yntrelVandak(0));
        if (this.bazmanal >= 8 && newCell) {
            var newGrass = new Grass(newCell[0], newCell[1], this.index);
            grassArr.push(newGrass);
            matrix[newCell[1]][newCell[0]] = this.index;
            this.bazmanal = 0;
        }
    }
} 
