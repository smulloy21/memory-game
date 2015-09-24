import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      tiles: this.store.findAll('tile'),
      tilesShowing: function() {
        return this.tiles.filterBy('isShowing');
      }.property('@each.isShowing'),
      tilesMatched: function() {
        return this.tiles.filterBy('isMatched');
      }.property('@each.isMatched')
    });
  },
  actions: {
    showTile(tile) {
      tile.set('isShowing', true);
      tile.save();
      this.transitionTo('index');
    },
    hideTile(tile) {
      tile.set('isShowing', false);
      tile.save();
      this.transitionTo('index');
    }
  }
});
