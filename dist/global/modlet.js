/*[global-shim-start]*/
(function (exports, global){
	var origDefine = global.define;

	var get = function(name){
		var parts = name.split("."),
			cur = global,
			i;
		for(i = 0 ; i < parts.length; i++){
			if(!cur) {
				break;
			}
			cur = cur[parts[i]];
		}
		return cur;
	};
	var modules = (global.define && global.define.modules) ||
		(global._define && global._define.modules) || {};
	var ourDefine = global.define = function(moduleName, deps, callback){
		var module;
		if(typeof deps === "function") {
			callback = deps;
			deps = [];
		}
		var args = [],
			i;
		for(i =0; i < deps.length; i++) {
			args.push( exports[deps[i]] ? get(exports[deps[i]]) : ( modules[deps[i]] || get(deps[i]) )  );
		}
		// CJS has no dependencies but 3 callback arguments
		if(!deps.length && callback.length) {
			module = { exports: {} };
			var require = function(name) {
				return exports[name] ? get(exports[name]) : modules[name];
			};
			args.push(require, module.exports, module);
		}
		// Babel uses the exports and module object.
		else if(!args[0] && deps[0] === "exports") {
			module = { exports: {} };
			args[0] = module.exports;
			if(deps[1] === "module") {
				args[1] = module;
			}
		} else if(!args[0] && deps[0] === "module") {
			args[0] = { id: moduleName };
		}

		global.define = origDefine;
		var result = callback ? callback.apply(null, args) : undefined;
		global.define = ourDefine;

		// Favor CJS module.exports over the return value
		modules[moduleName] = module && module.exports ? module.exports : result;
	};
	global.define.orig = origDefine;
	global.define.modules = modules;
	global.define.amd = true;
	ourDefine("@loader", [], function(){
		// shim for @@global-helpers
		var noop = function(){};
		return {
			get: function(){
				return { prepareGlobal: noop, retrieveGlobal: noop };
			},
			global: global,
			__exec: function(__load){
				eval("(function() { " + __load.source + " \n }).call(global);");
			}
		};
	});
})({},window)
/*modlet@1.0.0#hello-world.stache!can@2.3.0-pre.11#view/stache/system*/
define('modlet/hello-world.stache', [
    'module',
    'can/view/stache/stache',
    'can/view/stache/mustache_core'
], function (module, stache, mustacheCore) {
    var renderer = stache([
            {
                'tokenType': 'special',
                'args': ['greeting']
            },
            {
                'tokenType': 'chars',
                'args': [', ']
            },
            {
                'tokenType': 'start',
                'args': [
                    'span',
                    false
                ]
            },
            {
                'tokenType': 'attrStart',
                'args': ['class']
            },
            {
                'tokenType': 'attrValue',
                'args': ['red']
            },
            {
                'tokenType': 'attrEnd',
                'args': ['class']
            },
            {
                'tokenType': 'end',
                'args': [
                    'span',
                    false
                ]
            },
            {
                'tokenType': 'special',
                'args': ['subject']
            },
            {
                'tokenType': 'close',
                'args': ['span']
            },
            {
                'tokenType': 'chars',
                'args': ['!!!\n']
            },
            {
                'tokenType': 'done',
                'args': []
            }
        ]);
    return function (scope, options) {
        var moduleOptions = { module: module };
        if (!(options instanceof mustacheCore.Options)) {
            options = new mustacheCore.Options(options || {});
        }
        return renderer(scope, options.add(moduleOptions));
    };
});
/*modlet@1.0.0#hello-world*/
define('modlet', [
    'exports',
    'module',
    'can',
    'can/map/define/define',
    'can/view/stache/stache',
    'modlet/hello-world.stache',
    'modlet/hello-world.less'
], function (exports, module, _can, _canMapDefineDefine, _canViewStacheStache, _helloWorldStache, _helloWorldLess) {
    'use strict';
    var _interopRequire = function (obj) {
        return obj && obj.__esModule ? obj['default'] : obj;
    };
    var can = _interopRequire(_can);
    var template = _interopRequire(_helloWorldStache);
    var ViewModel = can.Map.extend({
            define: {
                subject: {
                    value: 'World',
                    type: 'string'
                },
                greeting: {
                    value: 'Hello',
                    type: 'string'
                }
            }
        });
    can.Component.extend({
        tag: 'hello-world',
        template: template,
        viewModel: ViewModel
    });
    module.exports = ViewModel;
});
/*[global-shim-end]*/
(function (){
	window._define = window.define;
	window.define = window.define.orig;
})();
//# sourceMappingURL=hello-world.js.map