/**
 * @author Henryk Iwaniuk / b.iwaniuk@campus.tu-berlin.de
 */

NEWTON.Repellant = function (b1) {
    this.type = 'Repellant';

    this.body = b1;
    this.exclude = [this.body];
};

NEWTON.Repellant.prototype = {
    constructor: NEWTON.Rubberband
};

NEWTON.Repellant.prototype.__applyForce = function (world) {
    for (var i=0; i<world.__bodies.length; i++) {
        var body2 = world.__bodies[i];
        if (world.indexOf(body2) < 0) {
            this.__applyForce_to_bodies(body2);
        }
    }
};

NEWTON.Repellant.prototype.__applyForce_to_bodies = function (body2) {
     var dV = new NEWTON.v3d();
     dV.subtract(body2.position, this.body.position);
     dV.multiply(this.force(dV.length())/dV.length());
     this.body.applyForceVector(dV.multiply(-1));
     body2.applyForceVector(dV);
};

NEWTON.Repellant.prototype.force = function (d) {
    return 4 * d * d;
};
