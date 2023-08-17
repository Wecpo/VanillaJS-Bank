export function extractErrorMessage(errorData) {
	return typeof errorData.extractErrorMessage === 'object'
		? errorData.message[0]
		: errorData.message
}
