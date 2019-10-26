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
const {isString} = require('../../');

/**
 */
describe('isString', () => {
	/**
	 */
	it('type of function', () => {
		assert.strictEqual(typeof isString, 'function');
	});

	/**
	 */
	it('isString() === false', () => {
		assert.ok(!isString());
    });

    /**
	 */
	it('isString("foo") === true', () => {
		assert.ok(isString('foo'));
    });

    /**
	 */
	it('isString(new String("foo")) === false', () => {
		assert.ok(!isString(new String('foo')));
    });

    /**
	 */
	it('isString(Symbol("foo")) === false', () => {
		assert.ok(!isString(Symbol('foo')));
    });
    
    /**
	 */
	it('isString(123) === false', () => {
		assert.ok(!isString(123));
    });
});