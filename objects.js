
class Cylinder{
    constructor(radius, height){
        this.volume = Math.PI * (radius ** 2) * height
    }
}

const vol = new Cylinder(12, 30).volume;
const result = vol.toFixed(4)

console.log(result);

