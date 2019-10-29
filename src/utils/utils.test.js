import { capitalize, getEventApiUrl } from './utils';

describe('capitalize tests', () => {
  it('captalizes the first letter of a string', () => {
    const str = 'this is a test string';
    expect(capitalize(str)).toBe('This is a test string');
  });

  it('returns null if the string parameter is not defined', () => {
    expect(capitalize()).toBe(null);
  });
});

describe('getEventApiUrl tests', () => {
  it('returns the correct api string', () => {
    expect(getEventApiUrl('vindhya')).toBe(
      'https://api.github.com/users/vindhya/events'
    );
  });

  it('returns null if the username parameter is not defined', () => {
    expect(getEventApiUrl()).toBe(null);
  });
});
