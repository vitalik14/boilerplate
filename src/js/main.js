/**
 * Main application entry point.
 *
 * @author Stanislav Kalashnik <darkpark.main@gmail.com>
 * @license GNU GENERAL PUBLIC LICENSE Version 3
 */

'use strict';

var app    = require('stb-app'),
    router = require('spa-router');


// main application events
app.addListeners({
    // all resources are loaded
    load: function load () {
        // set pages
        router.init([
            require('./pages/init'),
            require('./pages/main')
        ]);
    },

    // everything is ready
    done: function done () {
        // go to the main page when necessary
        router.navigate('pageMain');
    }
});