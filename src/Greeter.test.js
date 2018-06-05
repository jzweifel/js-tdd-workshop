import Greeter from './Greeter';

describe('Say hello', () => {
  it('says hello to me', () => {
    const actual = new Greeter().sayHello('me');
    expect(actual).toEqual('Hello me!');
  });
});