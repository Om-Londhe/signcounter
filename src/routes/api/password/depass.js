import * as CryptoJS from 'crypto-js';

export const post = async (request) => {
	const { encryptedPassword } = request.body;

	if (encryptedPassword && encryptedPassword.length) {
		const decryptedPassword = CryptoJS.AES.decrypt(encryptedPassword, 'theomlondhe').toString(
			CryptoJS.enc.Utf8
		);
		return {
			status: 200,
			body: {
				decryptedPassword
			}
		};
	} else {
		return {
			status: 404,
			body: {
				error: 'Please provide a password'
			}
		};
	}
};
