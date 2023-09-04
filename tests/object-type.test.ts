describe('Object type', () => {
	it('should support in typescript', () => {
		const person: { id: string; name: string } = {
			id: '998',
			name: 'Shimizu',
		}

		console.info(person)
	})
})
