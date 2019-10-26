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
const {isArray} = require('../../');

/**
 */
describe('isArray', () => {
	/**
	 */
	it('type of function', () => {
		assert.strictEqual(typeof isArray, 'function');
	});

	/**
	 */
	it('isArray() === false', () => {
		assert.ok(!isArray());
	});

	/**
	 */
	it('isArray([]) === true', () => {
		assert.ok(isArray([]));
	});

	/**
	 */
	it('isArray(new Array()) === true', () => {
		assert.ok(isArray([]));
	});

	/**
	 */
	it('isArray(new ObjectArray()) === true', () => {
		class ObjectArray extends Array{}
		assert.ok(isArray(new ObjectArray()));
	});

	/**
	 */
	it('isArray(new ArrayBuffer()) === false', () => {
		assert.ok(!isArray(new ArrayBuffer()));
	});
	
	/**
	 */
	it('isArray({}) === false', () => {
		assert.ok(!isArray({}));
	});
});