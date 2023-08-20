import { maxQuery } from '@/core/max-query/max-query.lib'

export class StatisticService {
	#BASE_URL = '/statistics'

	main(onSuccess) {
		return maxQuery({
			path: this.#BASE_URL,
			onSuccess
		})
	}
}
