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
const {isUndefined} = require('../../');

describe('isUndefined', () => {
  it('must be typeof function', () => {
    assert.ok(typeof isUndefined === 'function');
  });

  it('must be isUndefined() === true', () => {
    assert.ok(isUndefined());
  });

  it('must be isUndefined(undefined) === true', () => {
    assert.ok(isUndefined(undefined));
  });

  it('must be isUndefined(null) === false', () => {
    assert.ok(!isUndefined(null));
  });

  it('must be isUndefined(123) === false', () => {
    assert.ok(!isUndefined(123));
  });
});