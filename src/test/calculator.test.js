import { fireEvent, render, screen } from '@testing-library/react';
import Calculator from '../components/Calculator';

describe('Calculator test', () => {
  test('Calculator component is displayed on the HTML', () => {
    render(<Calculator />);
    const calculator = screen.getByTitle('calculator-container');
    expect(calculator).toMatchSnapshot();
  });

  test('Calculator buttons works and change the displayed result', () => {
    render(<Calculator />);
    const buttons = screen.getAllByRole('button');
    const result = screen.getByTitle('result');

    let cont = 1;
    buttons.forEach((button) => {
      fireEvent.click(button);
      switch (button.textContent) {
        case '.':
          expect(result.textContent).toBe(0 + button.textContent);
          break;
        case '=':
        case 'AC':
        case '+/-':
        case '%':
        case '+':
        case '/':
        case '-':
        case '*':
        case '0':
          expect(result.textContent).toBe('0');
          break;
        case '1':
          expect(result.textContent).toBe('1');
          break;
        default:
          expect(result.textContent.length).toBe(cont + 1);
          cont += 1;
          break;
      }
    });
  });
});
