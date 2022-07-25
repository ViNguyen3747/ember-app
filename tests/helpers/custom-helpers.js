import { click, fillIn } from '@ember/test-helpers';

export default async function createBand(name) {
  await click('[data-test-selector="new-band-button"]');
  await fillIn('[data-test-selector="new-band-name"]', name);
  return click('[data-test-selector="save-band-button"]');
}
