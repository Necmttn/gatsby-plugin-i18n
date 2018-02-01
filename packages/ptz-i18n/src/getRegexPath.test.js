import { getRegexPath } from './index';
import * as assert from 'ptz-assert';

describe('getRegexPath', () => {
  it('.pt file', () => {
    const slug = '/pt/blog/test/';
    const langKey = 'pt';
    const regexPath = getRegexPath(slug, langKey);
    const expected = '/blog/test/';

    assert.deepEqual(regexPath, expected);
  });
});
