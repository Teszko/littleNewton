/**
 * @author Henryk Iwaniuk / b.iwaniuk@campus.tu-berlin.de
 */

var NEWTON = {REVISION: '1'};

NEWTON.__IDCont = 0;


NEWTON.v3d = function () {
    this.x = 0;
    this.y = 0;
    this.z = 0;
};


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


NEWTON.Body = function () {
    NEWTON.Object3D.call(this);

    this.type = 'Body';

    this.mass = 1;
    this.velocity = new NEWTON.v3d();
};

NEWTON.Body.prototype = Object.create( NEWTON.Object3D.prototype );
NEWTON.Body.prototype.constructor = NEWTON.Body;