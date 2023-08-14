import styles from './user-item.module.scss'
import template from './user-item.template.html'
import { $M } from '@/core/mquery/mquery.lib'
import { ChildComponent } from '@/core/component/child.component'
import renderService from '@/core/services/render.service'

export class UserItem extends ChildComponent {
	constructor(user, isGray = false, onClick) {
		super()

		if (!user) throw new Error('User should be passed!')
		if (!user?.name) throw new Error('User must have a "name"!')
		if (!user?.avatarPath) throw new Error('User must have a "avatarPath"!')

		this.user = user
		this.isGray = isGray
		this.onClick = onClick
	}

	#preventDefault(event) {
		event.preventDefault()
	}

	update({ avatarPath, name }) {
		if (avatarPath && name) {
			$M(this.element).find('img').attr('src', avatarPath).attr('alt', name)

			$M(this.element).find('span').text(name)
		}
	}

	render() {
		this.element = renderService.htmlToElement(template, [], styles)

		this.update(this.user)

		$M(this.element).click(this.onClick || this.#preventDefault.bind(this))

		if (!this.onClick) $M(this.element).attr('disabled', '')
		if (this.isGray) $M(this.element).addClass(styles.gray)

		return this.element
	}
}
