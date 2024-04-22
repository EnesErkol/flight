import {render, screen, fireEvent, waitFor} from '@/src/utils/test-utils';

import FlightResultPage from '@/app/ucak-bileti/ucus-sonuc/page';

import { useRouter } from 'next/router';


jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      prefetch: () => null,
      push: () => null,
    };
  },
  useSearchParams: () => jest.fn(),
}));

describe('FlightResultPage', () => {
  let mockFareData: { status: string; amount: number; currency: string; };

  beforeEach(() => {
    mockFareData = {
      "status": "AVAILABLE",
      "amount": 242,
      "currency": "TRY"
    };

    Storage.prototype.getItem = jest.fn((key) => {
      if (key === 'fareData') {
        return JSON.stringify(mockFareData);
      }
      return null;
    });
  });

  it('should render the loading state if flightStatus is not loaded', () => {
    render(<FlightResultPage />);
    const loading = screen.getByText('Yükleniyor...');
    expect(loading).toBeInTheDocument();
  });

  it('should render the success state if flightStatus is AVAILABLE', () => {
    Storage.prototype.getItem = jest.fn(() => JSON.stringify(mockFareData));
    render(<FlightResultPage />);
    const successIcon = screen.getByTestId('success-icon');
    const successMessage = screen.getByText('Kabin seçiminiz tamamlandı.');
    expect(successIcon).toBeInTheDocument();
    expect(successMessage).toBeInTheDocument();
  });

  it('should render the error state if flightStatus is not AVAILABLE', () => {
    Storage.prototype.getItem = jest.fn(() => JSON.stringify({
      "status": "ERROR",
      "amount": 470.99,
      "currency": "TRY"
  }));
    render(<FlightResultPage />);
    const errorIcon = screen.getByTestId('error-icon');
    const errorMessage = screen.getByText('Kabin seçiminiz tamamlanamadı.');
    expect(errorIcon).toBeInTheDocument();
    expect(errorMessage).toBeInTheDocument();
  });

  it('should render the total amount if flightStatus is AVAILABLE', () => {
    Storage.prototype.getItem = jest.fn(() => JSON.stringify(mockFareData));
    render(<FlightResultPage />);
    const totalAmount = screen.getByText('TRY 242');
    expect(totalAmount).toBeInTheDocument();
  });

  it('should not render the total amount if flightStatus is not AVAILABLE', () => {
    Storage.prototype.getItem = jest.fn(() => JSON.stringify({
      "status": "ERROR",
      "amount": 470.99,
      "currency": "TRY"
  }));
    render(<FlightResultPage />);
    const totalAmount = screen.queryByText('TL 100');
    expect(totalAmount).not.toBeInTheDocument();
  });

  it('should not render the go back button if flightStatus is AVAILABLE', () => {
    Storage.prototype.getItem = jest.fn(() => JSON.stringify(mockFareData));
    render(<FlightResultPage />);
    const goBackButton = screen.queryByText('Başa Dön');
    expect(goBackButton).not.toBeInTheDocument();
  });

  it('should render the go back button if flightStatus is not AVAILABLE', () => {
    Storage.prototype.getItem = jest.fn(() => JSON.stringify({
      "status": "ERROR",
      "amount": 470.99,
      "currency": "TRY"
  }));
    render(<FlightResultPage />);
    const goBackButton = screen.getByText('Başa Dön');
    expect(goBackButton).toBeInTheDocument();
  });

  it('should go back to the flights page when the go back button is clicked', async() => {
    Storage.prototype.getItem = jest.fn(() => JSON.stringify({
      "status": "ERROR",
      "amount": 470.99,
      "currency": "TRY"
  }));

    render(<FlightResultPage />);
    const goBackButton = screen.getByTestId('goBackBtn');
    fireEvent.click(goBackButton);
    await waitFor(() => {
			expect(window.location.pathname).toBe('/');});
    
  });

});