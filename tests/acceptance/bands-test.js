import { module, test } from 'qunit';
import { visit, click, fillIn, waitFor } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { setupMirage } from 'ember-cli-mirage/test-support';
import { getPageTitle } from 'ember-page-title/test-support';
module('Acceptance | Bands', function (hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);
  test('List /bands', async function (assert) {
    //setup mirage allow to use this.server
    this.server.create('band', { name: 'Radiohead' });
    this.server.create('band', { name: 'Long Distance Calling' });
    await visit('/');
    assert.equal(getPageTitle(), 'Bands | Rock & Roll with Octane');
    let bandLinks = document.querySelectorAll('.mb-2 > a');
    assert.equal(bandLinks.length, 2, 'All band links are rendered');
    assert.ok(
      bandLinks[0].textContent.includes('Radiohead'),
      'First band link contains the band name'
    );
    assert.ok(
      bandLinks[1].textContent.includes('Long Distance Calling'),
      'The other band link contains the band name'
    );
  });
  test('Create a band', async function (assert) {
    this.server.create('band', { name: 'Royal Blood' });
    this.server.create('band', { name: 'Long Distance Calling' });
    await visit('/');
    await click('a[href="/bands/new"]');
    await fillIn('input', 'Caspian');
    await click('button');
    await waitFor('p.text-center'); //wait until response is rendered
    let bandLinks = document.querySelectorAll('.mb-2 > a');
    assert.equal(
      bandLinks.length,
      3,
      'All bands links are rendered',
      'a new band link is rendered'
    );
    assert.ok(
      bandLinks[2].textContent.includes('Caspian'),
      'the new band link is rendered as the last item'
    );
    assert.ok(
      document
        .querySelector('.border-b-4.border-purple-400')
        .textContent.includes('Songs'),
      'The songs tab is active'
    );
  });
});