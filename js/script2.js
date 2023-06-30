(function (window) {
  var jonnieGreeter = {};
  jonnieGreeter.name = "Jonnie";
  var greeting = "Goodbye ";
  jonnieGreeter.sayHi = function () {
    console.log(greeting + jonnieGreeter.name);
  }

  window.jonnieGreeter = jonnieGreeter;

})(window);



