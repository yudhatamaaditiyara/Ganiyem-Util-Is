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
const {isNull} = require("../../");

/**
 */
describe("isNull", () => {
	/**
	 */
	it("type of function", () => {
		assert.strictEqual(typeof isNull, "function");
	});

	/**
	 */
	it("isNull() === false", () => {
		assert.ok(!isNull());
	});

	/**
	 */
	it("isNull(null) === true", () => {
		assert.ok(isNull(null));
	});
	
	/**
	 */
	it("isNull(undefined) === false", () => {
		assert.ok(!isNull(undefined));
	});
});