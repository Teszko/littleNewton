/**
 * @author Henryk Iwaniuk / b.iwaniuk@campus.tu-berlin.de
 */

var NEWTON = {REVISION: '1'};

NEWTON.__IDCont = 0;

NEWTON.prototype = {
    constructor: NEWTON
};

NEWTON.prototype.isNumber = function (a) {
    return !isNaN(a-0);
};
