/**
 * @author Henryk Iwaniuk / b.iwaniuk@campus.tu-berlin.de
 *
 * v3d is a vector implementation that tries to be compatible with any object
 * with the following layout: {x: 0, y: 0, z: 0}
 * That includes THREE.Vector3
 *
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
    this.x = NEWTON.isNumber(a) ? x : this.x;
    this.y = NEWTON.isNumber(a) ? y : this.y;
    this.z = NEWTON.isNumber(a) ? z : this.z;

    return this;
};

NEWTON.v3d.prototype.copy = function (A) {
    if (NEWTON.isVector(A)) {
        this.x = A.x;
        this.y = A.y;
        this.z = A.z;
    }

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

NEWTON.v3d.prototype.add = function (A) {
    if (NEWTON.isVector(A)) {
        NEWTON.v3d.__addVector(A);
    }

    return this;
};

NEWTON.v3d.prototype.__addVector = function (a) {
    this.x += a.x;
    this.y += a.y;
    this.z += a.z;

    return this;
};
