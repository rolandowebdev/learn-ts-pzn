import { Employee, Manager } from '../src/employee'
import { Person } from '../src/person'
import { Seller } from '../src/seller'

describe('Interface', () => {
	it('should support interface', () => {
		const seller: Seller = {
			id: 1,
			name: 'Apple Shop',
			nib: '122221',
			npwp: '233399393',
		}

		console.info(seller)
	})

	it('should support function interface', () => {
		interface AddFunction {
			(value1: number, value2: number): number
		}

		const add: AddFunction = (value1: number, value2: number) => {
			return value1 + value2
		}

		expect(add(2, 2)).toBe(4)
	})

	it('should support indexable interface', () => {
		interface StringArray {
			[index: number]: string
		}

		const names: StringArray = ['Shimizu', 'Zeta', 'Kobo', 'Kaela']

		console.info(names)
	})

	it('should support indexable interface for non numbe index', () => {
		interface StringDictionary {
			[key: string]: string
		}

		const dictionary: StringDictionary = {
			name: 'Shimizu',
			address: 'Japan',
		}

		expect(dictionary['name']).toBe('Shimizu')
		expect(dictionary['address']).toBe('Japan')
	})

	it('should support extends interface', () => {
		const employee1: Employee = {
			id: '1222',
			name: 'Shimizu',
			division: 'UI/UX Designer',
		}

		const employee2: Employee = {
			id: '134',
			name: 'Kaela',
			division: 'Data Science',
		}

		const employee3: Employee = {
			id: '133',
			name: 'Zeta',
			division: 'Machine Learning',
		}

		const manager: Manager = {
			id: '2333',
			name: 'Kobo',
			division: 'IT',
			numberOfEmployees: 3,
		}

		console.info(employee1)
		console.info(employee2)
		console.info(employee3)
		console.info(manager)
	})

	it('should support function in interface', () => {
		const person: Person = {
			name: 'Shimizu',
			sayHello: function (name: string) {
				return `Hello ${name} my name is ${this.name}`
			},
		}

		console.info(person.sayHello('Zeta'))
	})

	it('should support intersection type', () => {
		interface HasName {
			name: string
		}

		interface HasId {
			id: string
		}

		type Domain = HasName & HasId

		const domain: Domain = {
			id: '38888',
			name: 'Shimizu',
		}

		console.info(domain)
	})

	it('should support type assertion', () => {
		const person: any = {
			name: 'Shimizu',
			age: 20,
		}

		const person2: Person = person as Person

		console.info(person2)
	})
})
