/*hello-world@1.0.0#hello-world.stache!can@2.3.0-pre.11#view/stache/system*/
var stache = require('can/view/stache/stache');
var mustacheCore = require('can/view/stache/mustache_core');
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
module.exports = function (scope, options) {
    var moduleOptions = { module: module };
    if (!(options instanceof mustacheCore.Options)) {
        options = new mustacheCore.Options(options || {});
    }
    return renderer(scope, options.add(moduleOptions));
};
//# sourceMappingURL=hello-world.js.map