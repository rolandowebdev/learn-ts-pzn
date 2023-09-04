export enum CustomerType {
	GOLD = 'GOLD',
	REGULAR = 'REGULAR',
	PLATINUM = 'PLATINUM',
}

export type Customer = {
	id: number
	name: string
	type: CustomerType
}
