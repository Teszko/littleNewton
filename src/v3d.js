
NEWTON.v3d =  function (x, y, z) {
    this.x = x || 0;
    this.y = y || 0;
    this.z = z || 0;
};

NEWTON.v3d.prototype = {
    constructor: NEWTON.v3d
};

NEWTON.v3d.prototype.length = function () {
    return Math.sqrt(this.x*this.x + this.y*this.y + this.z*this.z);
};

NEWTON.v3d.prototype.set = function (x, y, z) {
    this.x = x !== undefined ? x : this.x;
    this.y = y !== undefined ? y : this.y;
    this.z = z !== undefined ? z : this.z;
};

NEWTON.v3d.prototype.multiply = function (a) {
    if (a === undefined) {
            return this;
    }
    this.x *= a;
    this.y *= a;
    this.z *= a;
    return this;
};
