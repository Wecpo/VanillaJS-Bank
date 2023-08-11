/**
 * Represents the MQuery class for working with DOM elements.
 */

class MQuery {
	/**
	 * Create a new MQuery instance
	 * @param {string|HTMLElement} selector - A CSS selector string or an HTMLElement.
	 */
	constructor(selector) {
		if (typeof selector === 'string') {
			this.element = document.querySelector(selector)

			if (!this.element) {
				throw new Error(`Element ${selector} not found!`)
			}
		} else if (selector instanceof HTMLElement) {
			this.element = selector
		} else {
			throw new Error(`Invalid selector type`)
		}
	}

	/**
	 * Find the first element that matches the specified selector within the selected element.
	 * @param {string} selector - A CSS selector string to search for within the selected element
	 * @returns {MQuery} - A new MQuery instance for the found element
	 */
	find(selector) {
		const element = new MQuery(this.element.querySelector(selector))

		if (element) {
			return element
		} else {
			throw new Error(`Element ${selector} not found!`)
		}
	}

	/**
	 * Set the CSS style of the selected element.
	 * @param {string} property - The CSS property to set.
	 * @param {string} value - The value to set for the CSS property.
	 * @returns {MQuery} - The current MQuery instance for chaining
	 */
	css(property, value) {
		if (typeof property !== `string` || typeof value !== 'string') {
			throw new Error(`Property and value must be strings`)
		}

		this.element.style[property] = value
		return this
	}
}

/**
 * Create a new MQuery instance for the given selector.
 * @param {string|HTMLElement} selector - A CSS selector string or an HTMLElement
 * @returns {MQuery} A new MQuery instance for the given selector
 */

export function $M(selector) {
	return new MQuery(selector)
}
