import App from './App';

describe('Say hello', () => {
  it('says hello to me', () => {
    const actual = new App().sayHello('me');
    expect(actual).toEqual('Hello me!');
  });
});
