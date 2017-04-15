'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
* api list:
* on (eventname, callback)
* off (eventname)
* emit (eventname, params)
* */
function EventEmitter() {
  this.eventList = [];
}
EventEmitter.prototype.on = function (eventname, fn) {
  var fnlist = this.eventList[eventname];
  if (fnlist) {
    fnlist.push(fn);
  } else {
    fnlist = [fn];
  }
  this.eventList[eventname] = fnlist;
};
EventEmitter.prototype.emit = function (eventname) {
  var _this = this;

  for (var _len = arguments.length, params = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    params[_key - 1] = arguments[_key];
  }

  var fnlist = this.eventList[eventname];
  if (fnlist && fnlist.length > 0) {
    fnlist.forEach(function (item) {
      item.call.apply(item, [_this].concat(params));
    });
  } else {
    console.log('nothing happen');
  }
};
EventEmitter.prototype.off = function (eventname) {
  var fnlist = this.eventList[eventname];
  if (fnlist && fnlist.length > 0) {
    delete this.eventList[eventname];
  }
};
exports.default = EventEmitter;