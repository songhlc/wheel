// 外观模式 以dom里的addeventlistener为例
// 外观模式,简化接口的复杂度,浏览器兼容性
function addEvent (dom, type, fn) {
  // IE9+
  if (dom.addEventListener) {
    dom.addEventListener(type, fn, false)
  } else if (dom.attachEvent) {
    dom.attachEvent('on' + type, fn)
  } else {
    dom['on' + type] = fn
  }
}
// 2外观模式的作用,简化方法库
var dom = {
  getById: function (id) {
    return document.getElementById(id)
  },
  html: function (id, html) {
    this.getById(id).innerHTML = html
  }
  //....
}
//use it
dom.getById("id");
dom.html('id',"<span></span>")