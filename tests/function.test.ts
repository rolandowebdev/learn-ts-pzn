describe('Function', () => {
	it('should be in typescript', () => {
		function sayHello(name: string): string {
			return `Hello ${name}`
		}

		function printHello(name: string): void {
			console.info(`Hello ${name}`)
		}

		expect(sayHello('Kaela')).toBe('Hello Kaela')
		printHello('Kaela')
	})

	it('should support default value', () => {
		function sayHello(name: string = 'Kobo'): string {
			return `Hello ${name}`
		}

		expect(sayHello()).toBe('Hello Kobo')
		expect(sayHello('Kaela')).toBe('Hello Kaela')
	})

	it('should support rest parameter', () => {
		function sum(...values: number[]): number {
			let total = 0

			for (const value of values) {
				total += value
			}

			return total
		}

		expect(sum(1, 2, 3, 4, 5)).toBe(15)
	})

	it('should support optional parameter', () => {
		function sayHello(firstname: string, lastname?: string): string {
			return lastname
				? `My name is ${firstname} ${lastname}`
				: `My name is ${firstname}`
		}

		expect(sayHello('Kaela', 'Kovalskia')).toBe('My name is Kaela Kovalskia')
		expect(sayHello('Kaela')).toBe('My name is Kaela')
	})

	it('should support function overloading', () => {
		function callMe(value: number): number
		function callMe(value: string): string

		function callMe(value: any): any {
			switch (typeof value) {
				case 'string':
					return value.toUpperCase()
				case 'number':
					return value * 5
				default:
					console.info('type is not defined')
					break
			}
		}

		expect(callMe(10)).toBe(50)
		expect(callMe('Kaela')).toBe('KAELA')
	})

	it('should support function parameter', () => {
		function sayHello(name: string, filter: (name: string) => string) {
			return `Hello ${filter(name)}`
		}

		function toUpper(name: string): string {
			return name.toUpperCase()
		}

		expect(sayHello('Kaela', toUpper)).toBe('Hello KAELA')
	})
})
