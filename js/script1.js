(function (window) {
  var junkitGreeter = {};
  junkitGreeter.name = "Junkit";
  var greeting = "Hello ";
  junkitGreeter.sayHello = function () {
    console.log(greeting + junkitGreeter.name);
  }

  window.junkitGreeter = junkitGreeter;

})(window);
