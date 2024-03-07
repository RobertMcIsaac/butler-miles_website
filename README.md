<!-- in package.json: -->
"scripts": {
  "build:sass": "sass src/scss/main.scss src/css/main.css",
  "watch:sass": "sass --watch src/scss:src/css",
  "build:eleventy": "eleventy",
  "build": "npm run build:sass && npm run build:eleventy",
  "serve": "eleventy --serve",
<!--  npm package concurrently used for cross-platform compatibility  -->
<!-- Without concurrently, would be "dev": "npm run watch:sass & npm run serve" -->
<!-- '&' used to run commands in parallel -->
  "dev": "concurrently \"npm run watch:sass\" \"npm run serve\"",
<!-- '&&' runs commands sequentially - no prblem cross-platform -->
  "start": "npm run build && npm run serve"
}

<!-- "build:sass" compiles SCSS to CSS once. Used both as part of the dev process and before running Eleventy for production builds.

"watch:sass" watches SCSS files for changes and compiles them to CSS automatically, intended for use during development.

"build:eleventy" explicitly defines running Eleventy's build process, useful for isolating this step if needed.

"build" combines SCSS compilation and Eleventy build steps, ensuring both your styles and static site are built from the latest files.

"serve" continues to serve your site with Eleventy, including live reloading.

"dev" runs both the SCSS watcher and Eleventy's server in parallel, using concurrently for compatibility across different operating systems.

"start" is designed to run the full build process and then serve the site, ideal for a quick start-up of your development environment or for testing the production build locally. -->



<!-- in settings.json: -->
    "liveSassCompile.settings.formats": [
        {
            "format": "expanded",
            "extensionName": ".css",
<!-- when storing in css folder within project root directory(instead of src), use "/css" as value for "savePath" -->            
            "savePath": "/src/css",
        }
    ],

