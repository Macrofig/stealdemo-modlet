const ViewModel = can.Map.extend({
    define: {
        subject: {
            value: 'World',
            type: 'string'
        }
    }
});

can.Component.extend({
    tag: 'hello-world',
    template: 'Hello <span class="red">{{subject}}</span>!!!',
    // `ViewModel` is a constructor, CanJS knows what to do with it...
    viewModel: ViewModel
});

exports default ViewModel
