(function (pages, collectionViews, components, collections, app, $, _, Backbone) {
    pages.Index = Backbone.View.extend({
        tagName: 'div',
        template: _.template($('#indexTemplate').html()),

        initialize : function() {
            this.catsView = new collectionViews.Cats();
        },
        render : function() {
            this.$el.html(this.template());
            this.$el.find('#cont .row').append(this.catsView.render().el);

            return this;
        }
    });
})(
    CofoundrySPA.PageViews = CofoundrySPA.PageViews || {},
    CofoundrySPA.CollectionViews,
    CofoundrySPA.ComponentViews,
    CofoundrySPA.Collections,
    CofoundrySPA.App,
    jQuery,
    _, 
    Backbone
);