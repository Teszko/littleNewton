/**
 * @author Henryk Iwaniuk / b.iwaniuk@campus.tu-berlin.de
 */

NEWTON.Rubberband = function (b1, b2) {
    this.body1 = b1;
    this.body2 = b2;
};

NEWTON.Rubberband.prototype = {
    constructor: NEWTON.Rubberband
};

NEWTON.Rubberband.prototype.force = function (d) {
    return 4/d;
};
