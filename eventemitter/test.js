import EventEmitter from './index'

let eventEmitter = new EventEmitter()
// 注册一个事件
eventEmitter.on('test', (a) => {
  console.log(a)
})
eventEmitter.emit('test', 'test')
eventEmitter.on('test', (a, b) => {
  console.log(a + b)
})
eventEmitter.emit('test', 'test', 'test2')

let eventEmitter2 = new EventEmitter()
//多实例事件
eventEmitter2.on('test', function () {
  console.log('i am evnet2')
})
eventEmitter2.emit('test')

eventEmitter2.off('test')
eventEmitter2.emit('test')