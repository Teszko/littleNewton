
NEWTON.World = function () {
    this.__bodies = [];
};

NEWTON.World.prototype.add = function (obj) {
    this.__bodies.push(obj);
    return obj;
};


NEWTON.Object3D = function () {
    Object.defineProperty(this, 'id', {value: NEWTON.__IDCont++});

    this.type = 'Object3D';

    this.position = new NEWTON.v3d();
};

NEWTON.Object3D.prototype = {
    constructor: NEWTON.Object3D
};
