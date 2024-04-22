export interface IFlightData {
  flights: IFlight[]
}

export interface IFlight {
  originAirport: Airport
  destinationAirport: Airport
  arrivalDateTimeDisplay: string
  departureDateTimeDisplay: string
  flightDuration: string
  fareCategories: {
    [key: string]: {
      subcategories: Subcategory[]
    }
  }
}

export interface Airport {
  name: string
  code: string
  city: {
    code: string
    name: string
  }
  country: {
    code: string
    name: string
  }
}

export interface Subcategory {
  brandCode: string
  price: {
    amount: number
    currency: string
  }
  order: number
  status: string
  rights: string[]
}
