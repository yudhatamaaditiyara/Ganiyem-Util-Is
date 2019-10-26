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
const assert = require("assert");
const {isFunction} = require("../../");

/**
 */
describe("isFunction", () => {
	/**
	 */
	it("type of function", () => {
		assert.strictEqual(typeof isFunction, "function");
	});

	/**
	 */
	it("isFunction() === false", () => {
		assert.ok(!isFunction());
	});

	/**
	 */
	it("isFunction(() => {}) === true", () => {
		assert.ok(isFunction(() => {}));
	});

	/**
	 */
	it("isFunction(function(){}) === true", () => {
		assert.ok(isFunction(function (){}));
	});

	/**
	 */
	it("isFunction(function *(){...}) === true", () => {
		assert.ok(isFunction(function *(){
			for (let i = 0; i < 10; ++i) {
				yield i;
			}
		}));
	});

	/**
	 */
	it("isFunction(new Function()) === true", () => {
		assert.ok(isFunction(new Function()));
	});

	/**
	 */
	it("isFunction(new ObjectFunction()) === true", () => {
		class ObjectFunction extends Function{}
		assert.ok(isFunction(new ObjectFunction()));
	});

	/**
	 */
	it("isFunction(null) === false", () => {
		assert.ok(!isFunction(null));
	});
});