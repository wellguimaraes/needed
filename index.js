var modules = {};
var needed  = {
  register: function(name, subject) {
    modules[ name ] = subject;
  },

  using: function(dependencies, fn) {
    var deps = dependencies.map(function(it) {
      const module = modules[ it ];
      return typeof module == 'function' ? module() : module;
    });

    return fn.apply(null, deps);
  }
};

module.exports = global.__needed || (global.__needed = needed);