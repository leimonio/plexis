import toHuman from '../src';

describe('@plexis/to-human', () => {
  it('Converts a string into a human readable text', () => {
    expect(toHuman('foo')).toBe('Foo');
    expect(toHuman('foo     bar')).toBe('Foo bar');
    expect(toHuman(' foo-bar  baz quxQuux corge_grault GarplyWaldo')).toBe(
      'Foo bar baz qux quux corge grault garply waldo'
    );
    expect(toHuman(' foo-bar-baz qux       quux')).toBe('Foo bar baz qux quux');
    expect(toHuman('fooBar qux-core - _ ')).toBe('Foo bar qux core');
  });
});
