import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    showTile(tile) {
      var params = {
        id: tile.id,
        image: tile.image,
        isImageShowing: true,
      };
      this.sendAction('showTile', tile, params);
    },
    hideTile(tile) {
      var params = {
        id: tile.id,
        image: tile.image,
        isImageShowing: false,
      };
      this.sendAction('showTile', tile, params);
    }
  }
});
