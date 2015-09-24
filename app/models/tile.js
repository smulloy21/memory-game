import DS from 'ember-data';

export default DS.Model.extend({
  image: DS.attr(),
  isMatched: DS.attr(),
  isShowing: DS.attr()
});
