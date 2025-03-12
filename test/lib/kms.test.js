'use strict';

require('leo-config').bootstrap({
	_global: {
		leoaws: {
			region: 'us-east-1'
		}
	}
});

const leoaws = require('./../../');
const assert = require('assert');

describe('KMS', function() {

	it('has the kms service', () => {
		assert(leoaws.kms._service);
	});

	test('Confirm Value to be same after encrypt followed by decrypt', async () => {
		const key = 'arn:aws:kms:us-east-1:220162591379:key/16a7939f-e1cb-4146-b752-9010bc569950';
		const value = 'x#2$!3mMzX';
		try {
			let encryptedValue = await leoaws.kms.encrypt(key, value);
			const decryptedValue = await leoaws.kms.decrypt(encryptedValue);
			console.log(`value=${value}, encryptedValue= ${encryptedValue}, decryptedValue= ${decryptedValue}`);
			expect(decryptedValue).toBe(value);
		} catch (err) {
			console.log(err);
			assert(false);
		}
	});

});


