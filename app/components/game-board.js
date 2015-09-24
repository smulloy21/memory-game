import Ember from 'ember';

export default Ember.Component.extend({
  randomize: ['id:rand'],
  shuffledTiles: Ember.computed.sort('model', 'randomize'),
  isShowing: function() {
    return this.get('isShowing');
  },
  actions: {
    showTile(tile) {
      this.sendAction('showTile', tile);
    },
    hideTile(tile) {
      this.sendAction('hideTile', tile);
    }
  }
});
