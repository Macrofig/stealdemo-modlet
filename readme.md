# Global Modlet

The global modlet has two main files, the JavaScript file that contains the core code for the web component and the less file that contains the styles.  The JS file is written using some ES6 code.

In order to demo this, we need to either use global scripts or compile the code using something like Gulp or Grunt.

In a global pattern, like in the demo.html file, we can make changes and simply refresh the page to get those changes. The script appends the web component tag which causes CanJS to initiate it and trigger any logic.

In a compiled patter, we need to create a few tasks: a build task, a watch task, and a live-reload task. Probably would want to compile less as well, so add that too. When you make changes, you have to wait for the watch task to complete. This can be very fast or very slow, depending on the complexity of your dependency tree.


## Why is this not good?

- Modlet is not loading its own dependencies.
- Could refactor demo to use a compiled script (needs gulp/grunt/etc), but this means that you need to add a watch/build and reload/autoreload the script in your demo.
- Would have to create the demo html again for tests.
- Babel can compile to any ES5 module system but you have to do work to create output into multiple formats.
