import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
  test('with only first param', () => {
    expect(classNames('class')).toBe('class');
  });
  test('with add param', () => {
    const expected = 'class addClass1 addClass2';
    expect(classNames('class', {}, ['addClass1', 'addClass2'])).toBe(expected);
  });
  test('with mods param', () => {
    const expected = 'class addClass1 addClass2 hovered scrollable';
    expect(
      classNames('class', { hovered: true, scrollable: true }, [
        'addClass1',
        'addClass2',
      ])
    ).toBe(expected);
  });
  test('with mods one false param', () => {
    const expected = 'class addClass1 addClass2 hovered';
    expect(
      classNames('class', { hovered: true, scrollable: false }, [
        'addClass1',
        'addClass2',
      ])
    ).toBe(expected);
  });
  test('with mods one undefined', () => {
    const expected = 'class addClass1 addClass2 hovered';
    expect(
      classNames('class', { hovered: true, scrollable: undefined }, [
        'addClass1',
        'addClass2',
      ])
    ).toBe(expected);
  });
});
