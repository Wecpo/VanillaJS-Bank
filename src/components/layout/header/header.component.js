import renderService from '@/core/services/render.service'
import styles from './header.module.scss'
import template from './header.template.html'
import { ChildComponent } from '@/core/component/child.component'
import { Logo } from './logo/logo.component'
import { LogoutButton } from './logout-button/logout-button.component'
import { Search } from './search/search.component'
import { UserItem } from '@/components/ui/user-item/user-item.component'
import { Store } from '@/core/store/store'
import { $M } from '@/core/mquery/mquery.lib'

export class Header extends ChildComponent {
	constructor({ router }) {
		super()

		this.store = Store.getInstance()
		this.store.addObserver(this)

		this.router = router

		this.userItem = new UserItem({
			avatarPath: `/`,
			name: `Max`
		})
	}

	update() {
		this.user = this.store.state.user

		const authSideElement = $M(this.element).find(`#auth-side`)

		if (this.user) {
			authSideElement.show()
			this.userItem.update(this.user)
			this.router.navigate(`/`)
		} else {
			authSideElement.hide()
		}
	}
	render() {
		this.element = renderService.htmlToElement(
			template,
			[
				Logo,
				new LogoutButton({
					router: this.router
				}),
				Search,
				this.userItem
			],
			styles
		)

		this.update()

		return this.element
	}
}
