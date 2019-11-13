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
const {isObject} = require('../../');

describe('isObject', () => {
  it('must be typeof function', () => {
    assert.ok(typeof isObject === 'function');
  });

  it('must be isObject() === false', () => {
    assert.ok(!isObject());
  });

  it('must be isObject({}) === true', () => {
    assert.ok(isObject({}));
  });

  it('must be isObject([]]) === true', () => {
    assert.ok(isObject([]));
  });

  it('must be isObject(new Date()) === true', () => {
    assert.ok(isObject(new Date()));
  });

  it('must be isObject(new Object()) === true', () => {
    assert.ok(isObject(new Object()));
  });

  it('must be isObject(null) === false', () => {
    assert.ok(!isObject(null));
  });

  it('must be isObject(undefined) === false', () => {
    assert.ok(!isObject(undefined));
  });
});