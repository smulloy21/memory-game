import DS from 'ember-data';

export default DS.Model.extend({
    image: DS.attr(),
    isImageShowing: DS.attr()
});
