/*hello-world@1.0.0#hello-world*/
'use strict';
var _interopRequire = function (obj) {
    return obj && obj.__esModule ? obj['default'] : obj;
};
var can = _interopRequire(require('can'));
require('can/map/define/define');
require('can/view/stache/stache');
var template = _interopRequire(require('./hello-world.stache.js'));
require('./hello-world.less.css');
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
//# sourceMappingURL=hello-world.js.map