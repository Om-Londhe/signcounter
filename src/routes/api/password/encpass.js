import * as CryptoJS from 'crypto-js';

export const post = async (request) => {
	const { decryptedPassword } = request.body;

	if (decryptedPassword && decryptedPassword.length) {
		const encryptedPassword = CryptoJS.AES.encrypt(decryptedPassword, 'theomlondhe').toString();
		return {
			status: 200,
			body: {
				encryptedPassword
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
