// For any third party dependencies, like jQuery, place them in the lib folder.

// Configure loading modules from the lib directory,
// except for 'app' ones, which are in a sibling
// directory.

requirejs.config({
    baseUrl: 'scripts/',
    paths:
    {
    	jquery: 'jquery-1.9.0',
    	react: 'libs/build/react',
    	reactdom: 'libs/build/react-dom',
    	browser: '//cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.23/browser.min',
    },
    scriptType: "text/babel"
    
});

// Start loading the main app file. Put all of
// your application logic in there.
define(function (require) {
    var InputWindow = require('inputWindow/inputWindow');

    InputWindow.initialize();

    
});