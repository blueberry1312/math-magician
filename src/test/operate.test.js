import operate from '../logic/operate';

describe('operate', () => {
  it('adds two numbers', () => {
    expect(operate(1, 2, '+')).toBe('3');
  });

  it('subtracts two numbers', () => {
    expect(operate(4, 2, '-')).toBe('2');
  });

  it('multiplies two numbers', () => {
    expect(operate(3, 4, 'x')).toBe('12');
  });

  it('divides two numbers', () => {
    expect(operate(8, 4, '÷')).toBe('2');
  });

  it('returns error message for unknown operation', () => {
    expect(() => operate(5, 3, 'unknown')).toThrow(
      "Unknown operation 'unknown'",
    );
  });

  it('returns error message when dividing by 0', () => {
    expect(operate(5, 0, '÷')).toBe("Can't divide by 0.");
  });

  it('returns error message when finding modulo by 0', () => {
    expect(operate(5, 0, '%')).toBe("Can't find modulo as can't divide by 0.");
  });
});
