import App from './app';
import {Data} from '../../constants';
import {render, screen} from '@testing-library/react';

test('Renders app-component', () => {
  render(<App offersAmount={Data.OFFERS_AMOUNT}/>);
  const textElement = screen.getByText(/Hello, world!/i);
  expect(textElement).toBeInTheDocument();
});
