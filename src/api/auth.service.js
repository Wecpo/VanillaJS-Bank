import { maxQuery } from '@/core/max-query/max-query.lib'
import { NotificationService } from '@/core/services/notification.service'

export class AuthService {
	#BASE_URL = '/auth'

	constructor() {
		// store
		this.notificationService = new NotificationService()
	}

	main(type, body) {
		return maxQuery({
			path: `${this.#BASE_URL}/${type}`,
			body,
			onSuccess: data => {
				// login store
				this.notificationService.show(
					'success',
					`You have successfully logged in!`
				)
			},
			method: 'POST'
		})
	}
}
