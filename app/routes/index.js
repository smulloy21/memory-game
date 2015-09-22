import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return Ember.RSVP.hash({
      tiles: this.store.findAll('tile'),
      tilesShowing: function() {
        return this.tiles.filterBy('isImageShowing');
      }.property('@each.isImageShowing')
    });
  },
  actions: {
    showTile(tile, params) {
      Object.keys(params).forEach(function(key) {
        tile.set(key,params[key]);
      });
      tile.save();
      // this.transitionTo('index');
    },
    hideTile(tile) {
      Object.keys(params).forEach(function(key) {
        tile.set(key,params[key]);
      });
      tile.save();
      // this.transitionTo('index');
    }
  }
});
