import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Service | catalog', function (hooks) {
  setupTest(hooks);

  test('it can store and retrieve bands', function (assert) {
    let catalog = this.owner.lookup('service:catalog');
    catalog.add('band', { id: 1, name: 'Led Zeppelin' });
    assert.equal(catalog.bands.length, 1);
    assert.equal(catalog.bands[0].name, 'Led Zeppelin');
  });
  test('it can store and retrieve songs', function (assert) {
    let catalog = this.owner.lookup('service:catalog');
    catalog.add('song', { id: 1, title: 'Achilles Last Stand', rating: 5 });
    assert.equal(catalog.songs.length, 1);
    assert.equal(catalog.songs[0].title, 'Achilles Last Stand');
  });

  test('it can load a record from a JSON:API response', function (assert) {
    let catalog = this.owner.lookup('service:catalog');
    catalog.load({
      data: {
        type: 'bands',
        id: 1,
        attributes: { name: 'TOOL' },
        relationships: { songs: { links: { related: '/bands/1/songs' } } },
      },
    });
    let band = catalog.bands[0];
    assert.equal(band.name, 'TOOL');
    assert.equal(band.relationships.songs, '/bands/1/songs');
  });
});
