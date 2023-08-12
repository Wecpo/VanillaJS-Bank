import renderService from '@/core/services/render.service'
import styles from './header.module.scss'
import template from './header.template.html'
import { ChildComponent } from '@/core/component/child.component'

export class Header extends ChildComponent {
	render() {
		this.element = renderService.htmlToElement(template, [], styles)

		return this.element
	}
}
