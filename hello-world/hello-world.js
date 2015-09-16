import can from 'can';
import 'can/map/define/define';

// `!` tells Steal that we need to load the file using a plugin
import template from './hello-world.stache!';
import './hello-world.less!';

const ViewModel = can.Map.extend({
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
    // `ViewModel` is a constructor, CanJS knows what to do with it...
    viewModel: ViewModel
});

export default ViewModel;
