"use strict";

// Application namespace
var CofoundrySPA = CofoundrySPA || {};

(function(app, $, _, Backbone){
    // Override the default template syntax
    _.templateSettings = {
        evaluate: /\{\[([\s\S]+?)\]\}/g,
        interpolate: /\{\{([\s\S]+?)\}\}/g
    };

    app.routeMap = {
        '(/)'               : 'index',
        'cat/:id'           : 'details',
        'login'             : 'login',
        'register'          : 'register'
    }

    // Global event publish/subscribe
    app.Events = _.extend({}, Backbone.Events);

    app.Router = Backbone.Router.extend({
        routes : app.routeMap
    });

})(CofoundrySPA.App = CofoundrySPA.App || {}, jQuery, _, Backbone);
