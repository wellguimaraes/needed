function Needed() {
  var modules = {};

  this.register = function(name, subject) {
    modules[ name ] = subject;
  };

  this.using = function(dependencies, fn) {
    var deps = dependencies.map(function(it) {
      const module = modules[ it ];
      return typeof module == 'function' ? module() : module;
    });

    return fn.apply(null, deps);
  };

  return this;
}

var needed = global.__needed || ( global.__needed = new Needed());

exports.register = needed.register;
exports.using    = needed.using;