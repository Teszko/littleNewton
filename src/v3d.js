/**
 * @author Henryk Iwaniuk / b.iwaniuk@campus.tu-berlin.de
 */

NEWTON.v3d =  function (x, y, z) {
    this.type = 'v3d';
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

    return this;
};

NEWTON.v3d.prototype.multiply = function (a) {
    if (NEWTON.isNumber(a)) {
        NEWTON.v3d.__multiplyNum(a);
    }

    return this;
};

NEWTON.v3d.prototype.__multiplyNum = function (a) {
    this.x *= a;
    this.y *= a;
    this.z *= a;
    
    return this;
};

NEWTON.v3d.prototype.add = function (a) {
    if (NEWTON.isVector(a)) {
        NEWTON.v3d.__addVector(a);
    }

    return this;
};

NEWTON.v3d.prototype.__addVector = function (a) {
    this.x += a.x;
    this.y += a.y;
    this.z += a.z;

    return this;
};
