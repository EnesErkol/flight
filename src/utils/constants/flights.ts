const flightsData = {
  flights: [
    {
      id: "flight1", // Add unique id for the first flight
      originAirport: {
        name: "Istanbul Airport",
        code: "IST",
        city: {
          code: "IST",
          name: "Istanbul",
        },
        country: {
          code: "TR",
          name: "Turkey",
        },
      },
      destinationAirport: {
        name: "Antalya Airport",
        code: "AYT",
        city: {
          code: "AYT",
          name: "Antalya",
        },
        country: {
          code: "TR",
          name: "Turkey",
        },
      },
      arrivalDateTimeDisplay: "01:15",
      departureDateTimeDisplay: "02:45",
      flightDuration: "1s 30d",
      fareCategories: {
        BUSINESS: {
          subcategories: [
            {
              brandCode: "Eco Fly",
              price: {
                amount: 400.0,
                currency: "TRY",
              },
              order: 1,
              status: "AVAILABLE",
              rights: ["20 kg Bagaj", "Ucresiz Yemek Secimi"],
            },
            {
              brandCode: "Extra Fly",
              price: {
                amount: 500.0,
                currency: "TRY",
              },
              order: 2,
              status: "AVAILABLE",
              rights: [
                "30 kg Bagaj",
                "Standart Koltuk Secimi",
                "Ucresiz Yemek Secimi",
              ],
            },
            {
              brandCode: "Prime Fly",
              price: {
                amount: 800.99,
                currency: "TRY",
              },
              order: 3,
              status: "AVAILABLE",
              rights: [
                "50 kg Bagaj",
                "Standart Koltuk Secimi",
                "Ucretsiz Degisiklik",
                "Ucresiz Yemek Secimi",
              ],
            },
          ],
        },
        ECONOMY: {
          subcategories: [
            {
              brandCode: "Eco Fly",
              price: {
                amount: 242.0,
                currency: "TRY",
              },
              order: 1,
              status: "AVAILABLE",
              rights: ["15 kg Bagaj"],
            },
            {
              brandCode: "Extra Fly",
              price: {
                amount: 290.0,
                currency: "TRY",
              },
              order: 2,
              status: "AVAILABLE",
              rights: ["20 kg Bagaj", "Standart Koltuk Secimi"],
            },
            {
              brandCode: "Prime Fly",
              price: {
                amount: 351.99,
                currency: "TRY",
              },
              order: 3,
              status: "AVAILABLE",
              rights: [
                "25 kg Bagaj",
                "Standart Koltuk Secimi",
                "Ucretsiz Degisiklik",
              ],
            },
          ],
        },
      },
    },
    // Add unique id for the remaining flights
    {
      id: "flight2",
      originAirport: {
        name: "Istanbul Airport",
        code: "IST",
        city: {
          code: "IST",
          name: "Istanbul",
        },
        country: {
          code: "TR",
          name: "Turkey",
        },
      },
      destinationAirport: {
        name: "Antalya Airport",
        code: "AYT",
        city: {
          code: "AYT",
          name: "Antalya",
        },
        country: {
          code: "TR",
          name: "Turkey",
        },
      },
      arrivalDateTimeDisplay: "09:50",
      departureDateTimeDisplay: "11:20",
      flightDuration: "1s 30d",
      fareCategories: {
        BUSINESS: {
          subcategories: [
            {
              brandCode: "Eco Fly",
              price: {
                amount: 676.0,
                currency: "TRY",
              },
              order: 1,
              status: "ERROR",
              rights: ["20 kg Bagaj", "Ucresiz Yemek Secimi"],
            },
            {
              brandCode: "Extra Fly",
              price: {
                amount: 800.0,
                currency: "TRY",
              },
              order: 2,
              status: "AVAILABLE",
              rights: [
                "30 kg Bagaj",
                "Standart Koltuk Secimi",
                "Ucresiz Yemek Secimi",
              ],
            },
            {
              brandCode: "Prime Fly",
              price: {
                amount: 1200.99,
                currency: "TRY",
              },
              order: 3,
              status: "AVAILABLE",
              rights: [
                "50 kg Bagaj",
                "Standart Koltuk Secimi",
                "Ucretsiz Degisiklik",
                "Ucresiz Yemek Secimi",
              ],
            },
          ],
        },
        ECONOMY: {
          subcategories: [
            {
              brandCode: "Eco Fly",
              price: {
                amount: 250.0,
                currency: "TRY",
              },
              order: 1,
              status: "AVAILABLE",
              rights: ["15 kg Bagaj"],
            },
            {
              brandCode: "Extra Fly",
              price: {
                amount: 380.0,
                currency: "TRY",
              },
              order: 2,
              status: "AVAILABLE",
              rights: ["20 kg Bagaj", "Standart Koltuk Secimi"],
            },
            {
              brandCode: "Prime Fly",
              price: {
                amount: 470.99,
                currency: "TRY",
              },
              order: 3,
              status: "ERROR",
              rights: [
                "25 kg Bagaj",
                "Standart Koltuk Secimi",
                "Ucretsiz Degisiklik",
              ],
            },
          ],
        },
      },
    },
    {
      id: "flight3",
      originAirport: {
        name: "Istanbul Airport",
        code: "IST",
        city: {
          code: "IST",
          name: "Istanbul",
        },
        country: {
          code: "TR",
          name: "Turkey",
        },
      },
      destinationAirport: {
        name: "Antalya Airport",
        code: "AYT",
        city: {
          code: "AYT",
          name: "Antalya",
        },
        country: {
          code: "TR",
          name: "Turkey",
        },
      },
      arrivalDateTimeDisplay: "11:25",
      departureDateTimeDisplay: "12:55",
      flightDuration: "1s 30d",
      fareCategories: {
        BUSINESS: {
          subcategories: [
            {
              brandCode: "Eco Fly",
              price: {
                amount: 692.0,
                currency: "TRY",
              },
              order: 1,
              status: "AVAILABLE",
              rights: ["20 kg Bagaj", "Ucresiz Yemek Secimi"],
            },
            {
              brandCode: "Extra Fly",
              price: {
                amount: 950.0,
                currency: "TRY",
              },
              order: 2,
              status: "AVAILABLE",
              rights: [
                "30 kg Bagaj",
                "Standart Koltuk Secimi",
                "Ucresiz Yemek Secimi",
              ],
            },
            {
              brandCode: "Prime Fly",
              price: {
                amount: 1400.0,
                currency: "TRY",
              },
              order: 3,
              status: "AVAILABLE",
              rights: [
                "50 kg Bagaj",
                "Standart Koltuk Secimi",
                "Ucretsiz Degisiklik",
                "Ucresiz Yemek Secimi",
              ],
            },
          ],
        },
        ECONOMY: {
          subcategories: [
            {
              brandCode: "Eco Fly",
              price: {
                amount: 368.0,
                currency: "TRY",
              },
              order: 1,
              status: "AVAILABLE",
              rights: ["15 kg Bagaj"],
            },
            {
              brandCode: "Extra Fly",
              price: {
                amount: 425.0,
                currency: "TRY",
              },
              order: 2,
              status: "AVAILABLE",
              rights: ["20 kg Bagaj", "Standart Koltuk Secimi"],
            },
            {
              brandCode: "Prime Fly",
              price: {
                amount: 580.99,
                currency: "TRY",
              },
              order: 3,
              status: "ERROR",
              rights: [
                "25 kg Bagaj",
                "Standart Koltuk Secimi",
                "Ucretsiz Degisiklik",
              ],
            },
          ],
        },
      },
    },
    {
      id: "flight4",
      originAirport: {
        name: "Istanbul Airport",
        code: "IST",
        city: {
          code: "IST",
          name: "Istanbul",
        },
        country: {
          code: "TR",
          name: "Turkey",
        },
      },
      destinationAirport: {
        name: "Antalya Airport",
        code: "AYT",
        city: {
          code: "AYT",
          name: "Antalya",
        },
        country: {
          code: "TR",
          name: "Turkey",
        },
      },
      arrivalDateTimeDisplay: "18:20",
      departureDateTimeDisplay: "19:50",
      flightDuration: "1s 30d",
      fareCategories: {
        BUSINESS: {
          subcategories: [
            {
              brandCode: "Eco Fly",
              price: {
                amount: 670.0,
                currency: "TRY",
              },
              order: 1,
              status: "AVAILABLE",
              rights: ["20 kg Bagaj", "Ucresiz Yemek Secimi"],
            },
            {
              brandCode: "Extra Fly",
              price: {
                amount: 956.0,
                currency: "TRY",
              },
              order: 2,
              status: "AVAILABLE",
              rights: [
                "30 kg Bagaj",
                "Standart Koltuk Secimi",
                "Ucresiz Yemek Secimi",
              ],
            },
            {
              brandCode: "Prime Fly",
              price: {
                amount: 1358.0,
                currency: "TRY",
              },
              order: 3,
              status: "AVAILABLE",
              rights: [
                "50 kg Bagaj",
                "Standart Koltuk Secimi",
                "Ucretsiz Degisiklik",
                "Ucresiz Yemek Secimi",
              ],
            },
          ],
        },
        ECONOMY: {
          subcategories: [
            {
              brandCode: "Eco Fly",
              price: {
                amount: 195.0,
                currency: "TRY",
              },
              order: 1,
              status: "AVAILABLE",
              rights: ["15 kg Bagaj"],
            },
            {
              brandCode: "Extra Fly",
              price: {
                amount: 290.5,
                currency: "TRY",
              },
              order: 2,
              status: "AVAILABLE",
              rights: ["20 kg Bagaj", "Standart Koltuk Secimi"],
            },
            {
              brandCode: "Prime Fly",
              price: {
                amount: 458.0,
                currency: "TRY",
              },
              order: 3,
              status: "AVAILABLE",
              rights: [
                "25 kg Bagaj",
                "Standart Koltuk Secimi",
                "Ucretsiz Degisiklik",
              ],
            },
          ],
        },
      },
    },
  ],
};

export type Flight = (typeof flightsData)["flights"][0];
export default flightsData;
