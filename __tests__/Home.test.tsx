import {render, screen, fireEvent, waitFor} from '@/src/utils/test-utils';

import Home from '@/app/page';

jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      prefetch: () => null
    };
  }
}));

describe('Home', () => {
  it('should render the Home component', () => {
    render(<Home />);
    const title = screen.getByText('Merhaba');
    expect(title).toBeInTheDocument();
  });

  it('should render the origin city autocomplete input', () => {
    render(<Home />);
    const originCityInput = screen.getByPlaceholderText('Nereden ?');
    expect(originCityInput).toBeInTheDocument();
  });

  it('should render the destination city autocomplete input', () => {
    render(<Home />);
    const destinationCityInput = screen.getByPlaceholderText('Nereye ?');
    expect(destinationCityInput).toBeInTheDocument();
  });

  it('should render the date picker', () => {
    render(<Home />);
    const datePicker = screen.getByText('Tarih');
    expect(datePicker).toBeInTheDocument();
  });

  it('should render the passenger popover', () => {
    render(<Home />);
    const passengerPopover = screen.getByText('1');
    expect(passengerPopover).toBeInTheDocument();
  });

  it('should not submit the form if origin city and destination city are not provided',async() => {
    render(<Home />);
    
    const submitButton = screen.getByTestId('formSubmit');
    fireEvent.click(submitButton);

		await waitFor(() => {
			const errorModal = screen.getByText('Uçuş bulunamadı');
			expect(errorModal).toBeInTheDocument();});
  });

  it('should submit the form if origin city and destination city are provided', () => {
    render(<Home />);
    
    const originCityInput = screen.getByPlaceholderText('Nereden ?');
    fireEvent.change(originCityInput, { target: { value: 'Istanbul' } });

    const destinationCityInput = screen.getByPlaceholderText('Nereye ?');
    fireEvent.change(destinationCityInput, { target: { value: 'Ankara' } });

    const submitButton = screen.getByTestId('formSubmit');
    fireEvent.click(submitButton);
  });

it('should change the value of origin city input when a city is selected', () => {
	render(<Home />);
	
	const originCityInput = screen.getByPlaceholderText('Nereden ?') as HTMLInputElement;
	fireEvent.change(originCityInput, { target: { value: 'Istanbul' } });

	expect(originCityInput.value).toBe('Istanbul');
});

it('should change the value of destination city input when a city is selected', () => {
	render(<Home />);
	
	const destinationCityInput = screen.getByPlaceholderText('Nereye ?') as HTMLInputElement;
	fireEvent.change(destinationCityInput, { target: { value: 'Ankara' } });

	expect(destinationCityInput.value).toBe('Ankara');
});
});