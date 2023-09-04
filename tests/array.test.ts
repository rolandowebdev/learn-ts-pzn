describe('Array', () => {
	it('should same with javascript', () => {
		const names: string[] = ['Udin', 'Budi', 'Vzents']
		const values: number[] = [1, 2, 3]

		console.info(names)
		console.info(values)
	})

	it('should not change arrays value', () => {
		const hobbies: ReadonlyArray<string> = ['Reading', 'Volley', 'Game']

		console.info(hobbies)
	})

	it('should support tupple', () => {
		const person: readonly [string, string, number] = [
			'vzents',
			'software engineer',
			33,
		]

		console.info(person)
	})
})
