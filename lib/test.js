'use strict';

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var eventEmitter = new _index2.default();
// 注册一个事件
eventEmitter.on('test', function (a) {
  console.log(a);
});
eventEmitter.emit('test', 'test');
eventEmitter.on('test', function (a, b) {
  console.log(a + b);
});
eventEmitter.emit('test', 'test', 'test2');

var eventEmitter2 = new _index2.default();
//多实例事件
eventEmitter2.on('test', function () {
  console.log('i am evnet2');
});
eventEmitter2.emit('test');

eventEmitter2.off('test');
eventEmitter2.emit('test');