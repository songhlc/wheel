// 装饰者模式
// 不改变原来对象的基础上,通过对其进行包装拓展,满足更复杂的需求

//例子 $.ajax({})
var decorator = function (options) {
  options.beforeSend = function () {
    console.log('log something')
  }
  var _success = options.success
  options.success = function (data) {
    console.log('load success') //do anything before success
    _success(data)
  }
  return options
}
$.ajax(decorator({
  url:"xxxx.com",
  type:"get",
  success: function (data) {
    console.log(data)
  }
}))
