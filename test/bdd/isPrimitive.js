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
const {isPrimitive} = require('../../');

describe('isPrimitive', () => {
  it('must be typeof function', () => {
    assert.ok(typeof isPrimitive === 'function');
  });

  it('must be isPrimitive() === true', () => {
    assert.ok(isPrimitive());
  });

  it('must be isPrimitive(null) === true', () => {
    assert.ok(isPrimitive(null));
  });

  it('must be isPrimitive(undefined) === true', () => {
    assert.ok(isPrimitive(undefined));
  });

  it('must be isPrimitive("foo") === true', () => {
    assert.ok(isPrimitive('foo'));
  });

  it('must be isPrimitive(123) === true', () => {
    assert.ok(isPrimitive(123));
  });

  it('must be isPrimitive(false) === true', () => {
    assert.ok(isPrimitive(false));
  });

  it('must be isPrimitive(Symbol("foo")) === true', () => {
    assert.ok(isPrimitive(Symbol('foo')));
  });

  it('must be isPrimitive(new String("foo")) === false', () => {
    assert.ok(!isPrimitive(new String('foo')));
  });

  it('must be isPrimitive(new Number(123)) === false', () => {
    assert.ok(!isPrimitive(new Number(123)));
  });

  it('must be isPrimitive(new Boolean(false)) === false', () => {
    assert.ok(!isPrimitive(new Boolean(false)));
  });
});