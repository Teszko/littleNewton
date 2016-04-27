/**
 * @author Henryk Iwaniuk / b.iwaniuk@campus.tu-berlin.de
 */

NEWTON.World = function () {
    this.__bodies = [];
    this.__fields = [];
    this.__rubberbands = [];
};

NEWTON.World.prototype = {
    constructor: NEWTON.World
};

NEWTON.World.prototype.add = function (obj) {
    if (obj.type === undefined) {
        return obj;
    }

    if (obj.type == 'Body') {
        this.__bodies.push(obj);
        return obj;
    }

    return obj;
};

NEWTON.World.prototype.step = function (dt) {
    for (var i=0; i<this.__bodies.length; i++) {

    }
};


NEWTON.Object3D = function () {
    Object.defineProperty(this, 'id', {value: NEWTON.__IDCont++});

    this.type = 'Object3D';

    this.position = new NEWTON.v3d();
};

NEWTON.Object3D.prototype = {
    constructor: NEWTON.Object3D
};
