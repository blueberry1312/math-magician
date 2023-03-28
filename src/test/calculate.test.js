import calculate from '../logic/calculate';

describe('calculate', () => {
  it('clears the calculator when AC is pressed', () => {
    const obj = {
      total: '10',
      next: '5',
      operation: '+',
    };
    expect(calculate(obj, 'AC')).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  it('appends a digit to next when a number is pressed', () => {
    const obj = {
      total: '10',
      next: '5',
      operation: '+',
    };
    expect(calculate(obj, '2')).toEqual({
      total: '10',
      next: '52',
      operation: '+',
    });
  });

  it('adds decimal point when "." is pressed', () => {
    const obj = {
      total: '10',
      next: '5',
      operation: '+',
    };
    expect(calculate(obj, '.')).toEqual({
      total: '10',
      next: '5.',
      operation: '+',
    });
  });

  it('negates the current number when "+/-" is pressed', () => {
    const obj = {
      total: '10',
      next: '5',
      operation: '+',
    };
    expect(calculate(obj, '+/-')).toEqual({
      total: '10',
      next: '-5',
      operation: '+',
    });
  });

  it('performs addition when "+" is pressed', () => {
    const obj = {
      total: '10',
      next: '5',
      operation: '+',
    };
    expect(calculate(obj, '+')).toEqual({
      total: '15',
      next: null,
      operation: '+',
    });
  });

  it('performs subtraction when "-" is pressed', () => {
    const obj = {
      total: '10',
      next: '5',
      operation: '-',
    };
    expect(calculate(obj, '-')).toEqual({
      total: '5',
      next: null,
      operation: '-',
    });
  });

  it('performs multiplication when "x" is pressed', () => {
    const obj = {
      total: '10',
      next: '5',
      operation: 'x',
    };
    expect(calculate(obj, 'x')).toEqual({
      total: '50',
      next: null,
      operation: 'x',
    });
  });

  it('performs division when "÷" is pressed', () => {
    const obj = {
      total: '10',
      next: '5',
      operation: '÷',
    };
    expect(calculate(obj, '÷')).toEqual({
      total: '2',
      next: null,
      operation: '÷',
    });
  });
});
