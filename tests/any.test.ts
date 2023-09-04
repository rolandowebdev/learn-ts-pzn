describe('Any', () => {
	it('should be support in typescript', () => {
		const person: any = {
			id: 3,
			name: 'vzents',
			role: 'software engineer',
		}

		console.info(person)
	})
})
