# Steal Modlet

Using StealJS across the project, we can make builds, demos, and test running much easier.

## Demo

Using the `can-autorender` feature of CanJS, we can tell Steal to automatically render a given template on the HTML page. Also in CanJS, we can use `can-import` within a template to import files, essentially behaving like ES6's `import`. The template finishes up by instantiating a new `hello-world` component.

The next script in the demo adds data to the view model of the demo for the component to consume.

Instead of directly managing the dependencies in the demo file directly, we allow Steal to scan our `package.json` to manage everything for us.  It converts and imports the less files, it transpiles and imports ES6 code, and can even create source maps for us to aid in debugging.

No need for compiling using gulp or grunt, this process occurs in the browser. When changes occur, refreshing the browser will get the updated stuffs. Steal has a live-reload feature that can be configured as well.

## Tests

Test files would work the exact same way as the demo except the file would need to also have the test harness included.

## Builds

Using Steal in the browser parses files for use *in* the browser. It won't build our files for other's to consume. But, there is a Steal build tool that does everything the browser version does but puts them in a dist folder instead.

In the `stealBuild.js` file, there is some minimal configuration. Steal will, again, go the package.json file for the remaining configuration it requires.

Using Steal, we can export our code to be used by any module system. We can even create our own system and add a plugin to Steal so it can build for that system. By declaring the export types we want, Steal will automatically process the source files into the dist folder.
