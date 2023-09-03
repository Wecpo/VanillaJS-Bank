import styles from './statistics.module.scss'
import template from './statistics.template.html'
import { Store } from '@/core/store/store'
import { StatisticService } from '@/api/statistic.service'
import { Heading } from '@/components/ui/heading/heading.component'
import { ChildComponent } from '@/core/component/child.component'
import renderService from '@/core/services/render.service'
import { TRANSACTION_COMPLETED } from '@/constants/event.constants'
import {
	LOADER_SELECTOR,
	Loader
} from '@/components/ui/loader/loader.component'
import { $M } from '@/core/mquery/mquery.lib'
import { StatisticsItem } from './statistics-item/statistics-item.component'
import { formatToCurrency } from '@/utils/format/format-to-currency'

export class Statistics extends ChildComponent {
	constructor() {
		super()
		this.store = Store.getInstance().state
		this.statisticService = new StatisticService()

		this.element = renderService.htmlToElement(
			template,
			[new Heading('Statistics')],
			styles
		)

		this.#addListeners()
	}

	#addListeners() {
		document.addEventListener(
			TRANSACTION_COMPLETED,
			this.#onTransactionCompleted.bind(this)
		)
	}

	#removeListeners() {
		document.removeEventListener(
			TRANSACTION_COMPLETED,
			this.#onTransactionCompleted.bind(this)
		)
	}

	#onTransactionCompleted = () => {
		this.fetchData()
	}

	destroy() {
		this.#removeListeners()
	}

	fetchData() {
		this.statisticService.main(data => {
			if (!data) return

			const loaderElement = this.element.querySelector(LOADER_SELECTOR)
			if (loaderElement) loaderElement.remove()

			const statisticsItemsElement = $M(this.element).find('#statistics-items')
			statisticsItemsElement.text('')

			// const circleChartElement = $M(this.element).find('#circle-chart')
			// circleChartElement.text('')

			statisticsItemsElement
				.append(
					new StatisticsItem(
						'Income:',
						formatToCurrency(data[0].value),
						'green'
					).render()
				)
				.append(
					new StatisticsItem(
						'Expense:',
						formatToCurrency(data[1].value),
						'purple'
					).render()
				)
		})
	}

	render() {
		if (this.store.user) {
			$M(this.element).append(new Loader().render())
			this.fetchData()
		}

		return this.element
	}
}
