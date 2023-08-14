import { BaseScreen } from '@/core/component/base-screen.component'
import renderService from '@/core/services/render.service'
import template from './home.template.html'
import styles from './home.module.scss'
import { $M } from '@/core/mquery/mquery.lib'
import { Field } from '@/components/ui/field/field.component'
import { UserItem } from '@/components/ui/user-item/user-item.component'

export class Home extends BaseScreen {
	constructor() {
		super({ title: `Home` })
	}
	render() {
		const element = renderService.htmlToElement(
			template,
			[
				new Field({
					name: `test`,
					placeholder: `enter email`,
					variant: `green`
				}),
				new UserItem(
					{
						avatarPath:
							'https://cspromogame.ru//storage/upload_images/avatars/897.jpg',
						name: 'Max'
					},
					false,
					() => alert()
				)
			],
			styles
		)

		$M(element).find(`h1`).css(`color`, `white`)

		return element
	}
}
