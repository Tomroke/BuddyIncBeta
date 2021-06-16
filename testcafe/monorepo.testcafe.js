import { Selector } from 'testcafe';

fixture`MonoRepo`.page`http://localhost:4200`;

test('Test 1', async (t) => {
  await t
    .expect(Selector('#__next textarea').textContent)
    .contains('TEST')
    .hover('#__next textarea')
    .drag('#__next textarea', 100, 100)
    .expect(Selector('#__next textarea').value)
    .eql('TEST');
});
