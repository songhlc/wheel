// 单例
function singleton(){
  this.name = "test"
  this.value = "value"
}

function animal () {
  var _instance = null
  function fn (name) {
    this.name = name
    this.value = "value"
  }
  return function(name){
    if (!_instance) {
      _instance = new fn(name)
    }
    return _instance
  }
}
var test = animal();
var reuslt = test('name')
console.log("first create:" + reuslt.name)
reuslt =test('name2')
console.log("first create:" + reuslt.name)