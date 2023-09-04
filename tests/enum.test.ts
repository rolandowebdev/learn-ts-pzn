import { Customer, CustomerType } from '../src/enum'

describe('Enum', () => {
	it('should support in typescript', () => {
		const customer: Customer = {
			id: 1,
			name: 'Shimizu',
			type: CustomerType.PLATINUM,
		}

		console.info(customer)
	})
})
