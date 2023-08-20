import { maxQuery } from '@/core/max-query/max-query.lib'

export class UserService {
	#BASE_URL = '/users'

	getAll(searchTerm, onSuccess) {
		return maxQuery({
			path: `${this.#BASE_URL}${
				searchTerm ? `?${new URLSearchParams({ searchTerm })}` : ``
			}`,
			onSuccess
		})
	}
}
