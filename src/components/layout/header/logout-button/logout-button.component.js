import { ChildComponent } from '@/core/component/child.component'
import styles from './logout-button.module.scss'
import template from './logout-button.template.html'
import renderService from '@/core/services/render.service'
import { $M } from '@/core/mquery/mquery.lib'

export class LogoutButton extends ChildComponent {
	constructor({ router }) {
		super()

		this.router = router
	}
	render() {
		this.element = renderService.htmlToElement(template, [], styles)

		$M(this.element)
			.find('button')
			.click(() => {
				this.router.navigate('/auth')
			})

		return this.element
	}
}
