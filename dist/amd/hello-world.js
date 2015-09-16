/*modlet@1.0.0#hello-world*/
define([
    'exports',
    'module',
    'can',
    'can/map/define',
    'can/view/stache',
    './hello-world.stache',
    'css!./hello-world.less.css'
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
//# sourceMappingURL=hello-world.js.map