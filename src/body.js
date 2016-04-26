/**
 * @author Henryk Iwaniuk / b.iwaniuk@campus.tu-berlin.de
 */

NEWTON.Body = function () {
    NEWTON.Object3D.call(this);

    this.type = 'Body';

    this.mass = 1;                          // in kg
    this.velocity = new NEWTON.v3d();       // in m/s
    this.acceleration = new NEWTON.v3d();   // in m/s/s
    this.force = new NEWTON.v3d();          // in N
};

NEWTON.Body.prototype = Object.create(NEWTON.Object3D.prototype);
NEWTON.Body.prototype.constructor = NEWTON.Body;

NEWTON.Body.
