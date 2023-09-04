import { sayHello } from '../src/sayHello'

describe('sayHello', (): void => {
	it('it should  return Hello Vzents!', (): void => {
		expect(sayHello('vzents')).toBe('hello vzents')
	})
})
