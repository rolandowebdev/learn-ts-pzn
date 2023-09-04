describe('Union Type', () => {
	it('should support union type', () => {
		let sample: string | number | boolean = 'vzents'

		sample = 100
		console.info(sample)

		sample = true
		console.info(sample)
	})

	it('should be typeof operator', () => {
		const process = (value: number | string | boolean) => {
			if (typeof value === 'string') {
				return value.toUpperCase()
			} else if (typeof value === 'number') {
				return value + 3
			} else {
				return !value
			}
		}

		expect(process('vzents')).toBe('VZENTS')
		expect(process(true)).toBe(false)
		expect(process(100)).toBe(103)
	})
})
