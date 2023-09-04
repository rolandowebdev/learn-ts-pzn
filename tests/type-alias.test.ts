import { Category, Product } from '../src/typeAlias'

describe('Type alias', () => {
	it('should support in typescript', () => {
		const category: Category = {
			id: '1',
			name: 'macbook',
		}

		const product: Product = {
			id: '1',
			name: 'Macbook M1 2020',
			category: category,
			price: 18000000,
		}

		console.info(category)
		console.info(product)
	})
})
