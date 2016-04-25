
NEWTON.Body = function () {
    NEWTON.Object3D.call(this);

    this.type = 'Body';

    this.mass = 1;
    this.velocity = new NEWTON.v3d();
};

NEWTON.Body.prototype = Object.create( NEWTON.Object3D.prototype );
NEWTON.Body.prototype.constructor = NEWTON.Body;
