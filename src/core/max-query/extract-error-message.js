export function extractErrorMessage(errorData) {
	return typeof errorData === 'object'
		? errorData.message
		: errorData.message[0]
}
