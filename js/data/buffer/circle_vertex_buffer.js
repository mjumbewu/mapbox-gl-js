'use strict';

var util = require('../../util/util');
var Buffer = require('./buffer');

module.exports = CircleVertexBuffer;

/**
 * This contains the data that displays circle markers on the map,
 * including their centerpoint
 */
function CircleVertexBuffer(buffer) {
    Buffer.call(this, buffer);
}

CircleVertexBuffer.prototype = util.inherit(Buffer, {
    defaultLength: 2048 * 16,

    add: function(x, y, extrudeX, extrudeY) {
        this.resize();

        // pack the extrusion of -1 or 1 into one short
        this.shorts[this.pos / 2 + 0] = (x * 2) + ((extrudeX + 1) / 2);
        this.shorts[this.pos / 2 + 1] = (y * 2) + ((extrudeY + 1) / 2);

        this.pos += this.itemSize;
    }

});
