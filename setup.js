(function(global) {
  'use strict';
  global = global || window;
  var sliceFn = Array.prototype.slice;
  global.$ = function query(expr, container) {
    return typeof expr === 'string' ? (container || document).querySelector(expr) : expr || null;
  };

  global.$$ = function queryAll(expr, container) {
    var results = typeof expr === 'string' ? (container || document).querySelectorAll(expr) : expr || [];
    return sliceFn.call(results);
  };

  var index = 1;
  global.setup = function(name, fn) {
    var mainContaienr = $('#main');
    if (typeof name !== 'string') {
      fn = name;
      name = (fn.name || 'func ' + index++) + '';
    }
    var id = (name + Math.random().toString().slice(2)).replace(' ', '_');
    var htmlStr = '<button type="button" id="' + id + '" class="pure-button" >' + name + ' </button>';
    mainContaienr.insertAdjacentHTML('beforeend', htmlStr);
    $('#' + id, mainContaienr).addEventListener('click', fn);
  };

  global.test = function() {
    setup('foo', function() {
      log('foo');
    });
    setup(function bar() {
      log('bar', 'warning');
    });
    setup(function() {
      log('bazz', 'error');
    });
  };

  global.log = function log(message, level) {
    if(!level){
      level = 'message';
    }
    $('#log').insertAdjacentHTML('beforeend', '<div class="' + level + '">' + message + '</div>');
  };

})(this);
