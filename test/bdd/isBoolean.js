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
const {isBoolean} = require('../../');

describe('isBoolean', () => {
  it('must be typeof function', () => {
    assert.ok(typeof isBoolean === 'function');
  });

  it('must be isBoolean() === false', () => {
    assert.ok(!isBoolean());
  });

  it('must be isBoolean(true) === true', () => {
    assert.ok(isBoolean(true));
  });

  it('must be isBoolean(false) === true', () => {
    assert.ok(isBoolean(false));
  });

  it('must be isBoolean(new Boolean()) === false', () => {
    assert.ok(!isBoolean(new Boolean()));
  });

  it('must be isBoolean(1) === false', () => {
    assert.ok(!isBoolean(1));
  });
});