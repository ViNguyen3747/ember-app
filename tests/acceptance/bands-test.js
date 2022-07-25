import { module, test } from 'qunit';
import { visit, waitFor } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { setupMirage } from 'ember-cli-mirage/test-support';
import { getPageTitle } from 'ember-page-title/test-support';
import createBand from '../helpers/custom-helpers';
module('Acceptance | Bands', function (hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);
  test('List /bands', async function (assert) {
    //setup mirage allow to use this.server
    this.server.create('band', { name: 'Radiohead' });
    this.server.create('band', { name: 'Long Distance Calling' });
    await visit('/');
    assert.equal(getPageTitle(), 'Bands | Rock & Roll with Octane');
    assert
      .dom('[data-test-selector="band-link"]')
      .exists({ count: 2 }, 'All band links are rendered');
    assert
      .dom('[data-test-selector="band-list-item"]:first-child')
      .hasText('Radiohead', 'The first band link contains the band name');
    assert
      .dom('[data-test-selector="band-list-item"]:last-child')
      .hasText(
        'Long Distance Calling',
        'The other band link contains the band name'
      );
  });
  test('Create a band', async function (assert) {
    this.server.create('band', { name: 'Royal Blood' });
    this.server.create('band', { name: 'Long Distance Calling' });
    await visit('/');
    await createBand('Caspian');
    await waitFor('[data-test-selector="no-songs-text"]'); //wait until response is rendered
    assert
      .dom('[data-test-selector="band-list-item"]')
      .exists({ count: 3 }, 'A new band link is rendered');
    assert
      .dom('[data-test-selector="band-list-item"]:last-child')
      .hasText('Caspian', 'The new band link is rendered as the last item');

    assert
      .dom('[data-test-selector="songs-nav-item"] > .active')
      .exists('The songs tab is active');
  });
});
