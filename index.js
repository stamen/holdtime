"use strict";

/**
  * Convert high-resolution time to fractional milliseconds.
  */
var hrtimeToMS = function(hrtime) {
  return (hrtime[0] * 1e9 + hrtime[1]) / 1e6;
};

/**
 * Wrap a callback such that the time stops when the callback is triggered.
 */
module.exports = function(callback) {
  var startTime = process.hrtime();

  return function() {
    var elapsed = process.hrtime(startTime);

    var args = Array.prototype.slice.call(arguments);

    // if the wrapped function didn't yield anything, null out the error
    // argument
    if (args.length === 0) {
      args.push(null);
    }

    args.push(hrtimeToMS(elapsed));

    return callback.apply(this, args);
  };
};
