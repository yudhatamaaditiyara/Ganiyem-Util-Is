/**
 * Copyright (C) 2019 Yudha Tama Aditiyara
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const assert = require('assert');
const {isRegExp} = require('../../');

describe('isRegExp', () => {
  it('must be typeof function', () => {
    assert.ok(typeof isRegExp === 'function');
  });

  it('must be isRegExp() === false', () => {
    assert.ok(!isRegExp());
  });

  it('must be isRegExp(/foo/) === true', () => {
    assert.ok(isRegExp(/foo/));
  });

  it('must be isRegExp(new RegExp("foo")) === true', () => {
    assert.ok(isRegExp(new RegExp('foo')));
  });

  it('must be isRegExp("foo") === false', () => {
    assert.ok(!isRegExp('foo'));
  });
});