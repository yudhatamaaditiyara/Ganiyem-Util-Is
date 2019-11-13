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
const {isFunction} = require('../../');

describe('isFunction', () => {
  it('must be typeof function', () => {
    assert.ok(typeof isFunction === 'function');
  });

  it('must be isFunction() === false', () => {
    assert.ok(!isFunction());
  });

  it('must be isFunction(() => {}) === true', () => {
    assert.ok(isFunction(() => {}));
  });

  it('must be isFunction(function(){}) === true', () => {
    assert.ok(isFunction(function (){}));
  });

  it('must be isFunction(function *(){...}) === true', () => {
    assert.ok(isFunction(function *(){
      for (let i = 0; i < 10; ++i) {
        yield i;
      }
    }));
  });

  it('must be isFunction(new Function()) === true', () => {
    assert.ok(isFunction(new Function()));
  });

  it('must be isFunction(new ObjectFunction()) === true', () => {
    class ObjectFunction extends Function{}
    assert.ok(isFunction(new ObjectFunction()));
  });

  it('must be isFunction(null) === false', () => {
    assert.ok(!isFunction(null));
  });
});