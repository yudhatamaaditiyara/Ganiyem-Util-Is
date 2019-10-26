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

/**
 */
describe('isPrimitive', () => {
	/**
	 */
	it('type of function', () => {
		assert.strictEqual(typeof isPrimitive, 'function');
	});

	/**
	 */
	it('isPrimitive() === true', () => {
		assert.ok(isPrimitive());
    });

    /**
	 */
	it('isPrimitive(null) === true', () => {
		assert.ok(isPrimitive(null));
    });

    /**
	 */
	it('isPrimitive(undefined) === true', () => {
		assert.ok(isPrimitive(undefined));
    });

    /**
	 */
	it('isPrimitive("foo") === true', () => {
		assert.ok(isPrimitive('foo'));
    });

    /**
	 */
	it('isPrimitive(123) === true', () => {
		assert.ok(isPrimitive(123));
    });

    /**
	 */
	it('isPrimitive(false) === true', () => {
		assert.ok(isPrimitive(false));
    });

    /**
	 */
	it('isPrimitive(Symbol("foo")) === true', () => {
		assert.ok(isPrimitive(Symbol('foo')));
    });

    /**
	 */
	it('isPrimitive(new String("foo")) === false', () => {
		assert.ok(!isPrimitive(new String('foo')));
    });

    /**
	 */
	it('isPrimitive(new Number(123)) === false', () => {
		assert.ok(!isPrimitive(new Number(123)));
    });

    /**
	 */
	it('isPrimitive(new Boolean(false)) === false', () => {
		assert.ok(!isPrimitive(new Boolean(false)));
    });
});