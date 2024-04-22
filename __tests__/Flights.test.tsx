import {render, screen, fireEvent, waitFor} from '@/src/utils/test-utils';

import Flights from '@/app/ucak-bileti/ucuslar/page';

jest.mock("next/navigation", () => ({
	useRouter() {
		return {
			prefetch: () => null
		};
	}
}));

describe('Flights', () => {
  let mockFlights: { id: string; originAirport: { name: string; code: string; city: { code: string; name: string; }; country: { code: string; name: string; }; }; destinationAirport: { name: string; code: string; city: { code: string; name: string; }; country: { code: string; name: string; }; }; arrivalDateTimeDisplay: string; departureDateTimeDisplay: string; flightDuration: string; fareCategories: { BUSINESS: { subcategories: { brandCode: string; price: { amount: number; currency: string; }; order: number; status: string; rights: string[]; }[]; }; ECONOMY: { subcategories: { brandCode: string; price: { amount: number; currency: string; }; order: number; status: string; rights: string[]; }[]; }; }; }[];

  beforeEach(() => {
    mockFlights = [
			{
				"id": "flight1",
				"originAirport": {
						"name": "Istanbul Airport",
						"code": "IST",
						"city": {
								"code": "IST",
								"name": "Istanbul"
						},
						"country": {
								"code": "TR",
								"name": "Turkey"
						}
				},
				"destinationAirport": {
						"name": "Antalya Airport",
						"code": "AYT",
						"city": {
								"code": "AYT",
								"name": "Antalya"
						},
						"country": {
								"code": "TR",
								"name": "Turkey"
						}
				},
				"arrivalDateTimeDisplay": "01:15",
				"departureDateTimeDisplay": "02:45",
				"flightDuration": "1s 30d",
				"fareCategories": {
						"BUSINESS": {
								"subcategories": [
										{
												"brandCode": "Eco Fly",
												"price": {
														"amount": 400,
														"currency": "TRY"
												},
												"order": 1,
												"status": "AVAILABLE",
												"rights": [
														"20 kg Bagaj",
														"Ucresiz Yemek Secimi"
												]
										},
										{
												"brandCode": "Extra Fly",
												"price": {
														"amount": 500,
														"currency": "TRY"
												},
												"order": 2,
												"status": "AVAILABLE",
												"rights": [
														"30 kg Bagaj",
														"Standart Koltuk Secimi",
														"Ucresiz Yemek Secimi"
												]
										},
										{
												"brandCode": "Prime Fly",
												"price": {
														"amount": 800.99,
														"currency": "TRY"
												},
												"order": 3,
												"status": "AVAILABLE",
												"rights": [
														"50 kg Bagaj",
														"Standart Koltuk Secimi",
														"Ucretsiz Degisiklik",
														"Ucresiz Yemek Secimi"
												]
										}
								]
						},
						"ECONOMY": {
								"subcategories": [
										{
												"brandCode": "Eco Fly",
												"price": {
														"amount": 242,
														"currency": "TRY"
												},
												"order": 1,
												"status": "AVAILABLE",
												"rights": [
														"15 kg Bagaj"
												]
										},
										{
												"brandCode": "Extra Fly",
												"price": {
														"amount": 290,
														"currency": "TRY"
												},
												"order": 2,
												"status": "AVAILABLE",
												"rights": [
														"20 kg Bagaj",
														"Standart Koltuk Secimi"
												]
										},
										{
												"brandCode": "Prime Fly",
												"price": {
														"amount": 351.99,
														"currency": "TRY"
												},
												"order": 3,
												"status": "AVAILABLE",
												"rights": [
														"25 kg Bagaj",
														"Standart Koltuk Secimi",
														"Ucretsiz Degisiklik"
												]
										}
								]
						}
				}
		}
    ];
    Storage.prototype.getItem = jest.fn(() => JSON.stringify(mockFlights));
  });

it('should retrieve flights from local storage', () => {
	const storedFlights = JSON.parse(localStorage.getItem('mockFlights') ?? '');
	expect(storedFlights).toEqual(mockFlights);
});

  it('should render the Flights component', async() => {
    render(<Flights />);
		await waitFor(() => {
			const title = screen.getByText('Uçuş');
			expect(title).toBeInTheDocument();
  });
  });

  it('should render the switch for applying discount', () => {
    render(<Flights />);
    const switchLabel = screen.getByText('Promosyon kodu');
    expect(switchLabel).toBeInTheDocument();
  });

  it('should render the sort buttons', () => {
    render(<Flights />);
    const sortButton1 = screen.getByText('Ekonomi kabine ücreti');
    const sortButton2 = screen.getByText('Kalkış saati');
    expect(sortButton1).toBeInTheDocument();
    expect(sortButton2).toBeInTheDocument();
  });

  it('should change the filter state when sort buttons are clicked', () => {
    render(<Flights />);
    const sortButton1 = screen.getByText('Ekonomi kabine ücreti');
    fireEvent.click(sortButton1);

    const sortButton2 = screen.getByText('Kalkış saati');
    fireEvent.click(sortButton2);
  });

  it('should change the isDiscountApplied state when the switch is clicked', () => {
    render(<Flights />);
    const switchLabel = screen.getByText('Promosyon kodu');
    fireEvent.click(switchLabel);
  });

  it('should render the promotion text when the switch is checked', () => {
    render(<Flights />);
    const switchLabel = screen.getByText('Promosyon kodu');
    fireEvent.click(switchLabel);
    const promotionText = screen.getByText('Promosyon kodu seçeneği ile tüm Economy kabini Eco Fly paketlerini %50 indirimle satın alabilirsiniz!');
    expect(promotionText).toBeInTheDocument();
  });

  it('should sort the flights by price when the "Ekonomi kabine ücreti" button is clicked', () => {
    Storage.prototype.getItem = jest.fn(() => JSON.stringify(mockFlights));
    render(<Flights />);
    const sortButton = screen.getByText('Ekonomi kabine ücreti');
    fireEvent.click(sortButton);
  });

  it('should sort the flights by time when the "Kalkış saati" button is clicked', () => {
    Storage.prototype.getItem = jest.fn(() => JSON.stringify(mockFlights));
    render(<Flights />);
    const sortButton = screen.getByText('Kalkış saati');
    fireEvent.click(sortButton);
  });
});