export type Category = {
	id: string
	name: string
	description?: string
}

export type Product = {
	id: string
	name: string
	price: number
	category: Category
}
