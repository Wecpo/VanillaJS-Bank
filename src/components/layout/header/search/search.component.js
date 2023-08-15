import { ChildComponent } from '@/core/component/child.component'
import styles from './search.module.scss'
import template from './search.template.html'
import renderService from '@/core/services/render.service'
import { $M } from '@/core/mquery/mquery.lib'

export class Search extends ChildComponent {
	render() {
		this.element = renderService.htmlToElement(template, [], styles)

		$M(this.element).find('input').input({
			type: 'search',
			name: 'search',
			placeholder: 'Search contacts...'
		})

		return this.element
	}
}
