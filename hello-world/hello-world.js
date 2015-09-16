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
    template: '<p>Hello {{subject}}!!!</p>',
    // `ViewModel` is a constructor, CanJS knows what to do with it...
    viewModel: ViewModel
});

exports default ViewModel
