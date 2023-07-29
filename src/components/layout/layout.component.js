export class Layout {
	constructor({ router, children }) {
		this.router = router
		this.children = children
	}

	render() {
		const headerHTML =
			'<header>Header</header><a href="auth">Auth</a> <a href="about-us">About us</a> <a href="/">Home</a>'
		return `
        ${headerHTML}
        <main>
         ${this.children}
        </main>`
	}
}
