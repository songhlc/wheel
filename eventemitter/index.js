/*
* api list:
* on (eventname, callback)
* off (eventname)
* emit (eventname, ...params)
* */
function EventEmitter () {
  this.eventList = []
}
EventEmitter.prototype.on = function (eventname, fn) {
  let fnlist = this.eventList[eventname]
  if (fnlist) {
    fnlist.push(fn)
  } else {
    fnlist = [fn]
  }
  this.eventList[eventname] = fnlist
}
EventEmitter.prototype.emit = function (eventname, ...params) {
  let fnlist = this.eventList[eventname]
  if (fnlist && fnlist.length > 0) {
    fnlist.forEach((item) => {
      item.call(this, ...params)
    })
  } else {
    console.log('nothing happen')
  }

}
EventEmitter.prototype.off = function (eventname) {
  let fnlist = this.eventList[eventname]
  if (fnlist && fnlist.length > 0) {
    delete this.eventList[eventname]
  }
}
export default EventEmitter

